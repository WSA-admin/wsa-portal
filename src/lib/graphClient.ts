import { Client } from '@microsoft/microsoft-graph-client';
import { getAccessTokenForGraph } from './msalServer';

// Custom authentication provider for Graph client
class TokenAuthProvider {
  public async getAccessToken(): Promise<string> {
    const token = await getAccessTokenForGraph();
    if (!token) {
      throw new Error('No access token available');
    }
    return token;
  }
}

// Create Graph client instance
export function getGraphClient(): Client {
  const authProvider = new TokenAuthProvider();
  
  return Client.initWithMiddleware({
    authProvider: authProvider,
    defaultVersion: 'v1.0',
  });
}

// Graph API response interfaces
export interface ListItem {
  id: string;
  fields: {
    Title: string;
    [key: string]: any;
  };
  createdDateTime: string;
  lastModifiedDateTime: string;
}

export interface DriveItem {
  id: string;
  name: string;
  size?: number;
  createdDateTime: string;
  lastModifiedDateTime: string;
  downloadUrl?: string;
  webUrl: string;
  file?: {
    mimeType: string;
  };
  folder?: {
    childCount: number;
  };
}

export interface SharePointList {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  createdDateTime: string;
}

// SharePoint operations class
export class SharePointService {
  private graphClient: Client;

  constructor() {
    this.graphClient = getGraphClient();
  }

  // Get SharePoint site information
  async getSiteInfo(siteId: string) {
    try {
      const site = await this.graphClient
        .api(`/sites/${siteId}`)
        .get();
      return site;
    } catch (error) {
      console.error('Error getting site info:', error);
      throw error;
    }
  }

  // Get lists from SharePoint site
  async getLists(siteId: string): Promise<SharePointList[]> {
    try {
      const response = await this.graphClient
        .api(`/sites/${siteId}/lists`)
        .select('id,name,displayName,description,createdDateTime')
        .get();
      return response.value || [];
    } catch (error) {
      console.error('Error getting lists:', error);
      throw error;
    }
  }

  // Get list items with pagination support
  async getListItems(siteId: string, listId: string, options?: {
    select?: string[];
    filter?: string;
    orderBy?: string;
    top?: number;
    skip?: number;
  }): Promise<{ items: ListItem[]; nextLink?: string }> {
    try {
      let request = this.graphClient
        .api(`/sites/${siteId}/lists/${listId}/items`)
        .expand('fields');

      if (options?.select) {
        request = request.select(options.select.join(','));
      }

      if (options?.filter) {
        request = request.filter(options.filter);
      }

      if (options?.orderBy) {
        request = request.orderby(options.orderBy);
      }

      if (options?.top) {
        request = request.top(options.top);
      }

      if (options?.skip) {
        request = request.skip(options.skip);
      }

      const response = await request.get();
      
      return {
        items: response.value || [],
        nextLink: response['@odata.nextLink']
      };
    } catch (error) {
      console.error('Error getting list items:', error);
      throw error;
    }
  }

  // Create new list item
  async createListItem(siteId: string, listId: string, fields: Record<string, any>): Promise<ListItem> {
    try {
      const response = await this.graphClient
        .api(`/sites/${siteId}/lists/${listId}/items`)
        .post({
          fields: fields
        });
      return response;
    } catch (error) {
      console.error('Error creating list item:', error);
      throw error;
    }
  }

  // Update list item
  async updateListItem(siteId: string, listId: string, itemId: string, fields: Record<string, any>): Promise<ListItem> {
    try {
      const response = await this.graphClient
        .api(`/sites/${siteId}/lists/${listId}/items/${itemId}`)
        .patch({
          fields: fields
        });
      return response;
    } catch (error) {
      console.error('Error updating list item:', error);
      throw error;
    }
  }

  // Delete list item
  async deleteListItem(siteId: string, listId: string, itemId: string): Promise<void> {
    try {
      await this.graphClient
        .api(`/sites/${siteId}/lists/${listId}/items/${itemId}`)
        .delete();
    } catch (error) {
      console.error('Error deleting list item:', error);
      throw error;
    }
  }

  // Get drive items (files and folders)
  async getDriveItems(driveId: string, folderId?: string): Promise<DriveItem[]> {
    try {
      const endpoint = folderId 
        ? `/drives/${driveId}/items/${folderId}/children`
        : `/drives/${driveId}/root/children`;
      
      const response = await this.graphClient
        .api(endpoint)
        .select('id,name,size,createdDateTime,lastModifiedDateTime,webUrl,file,folder,@microsoft.graph.downloadUrl')
        .get();
      
      return response.value || [];
    } catch (error) {
      console.error('Error getting drive items:', error);
      throw error;
    }
  }

  // Upload file to SharePoint (small files <4MB)
  async uploadFile(driveId: string, fileName: string, fileContent: Buffer, folderId?: string): Promise<DriveItem> {
    try {
      const uploadPath = folderId 
        ? `/drives/${driveId}/items/${folderId}:/${fileName}:/content`
        : `/drives/${driveId}/root:/${fileName}:/content`;
      
      const response = await this.graphClient
        .api(uploadPath)
        .put(fileContent);
      
      return response;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  // Create upload session for large files (>4MB)
  async createUploadSession(driveId: string, fileName: string, fileSize: number, folderId?: string) {
    try {
      const uploadPath = folderId 
        ? `/drives/${driveId}/items/${folderId}:/${fileName}:/createUploadSession`
        : `/drives/${driveId}/root:/${fileName}:/createUploadSession`;
      
      const uploadSession = await this.graphClient
        .api(uploadPath)
        .post({
          item: {
            '@microsoft.graph.conflictBehavior': 'rename',
            name: fileName
          }
        });
      
      return uploadSession;
    } catch (error) {
      console.error('Error creating upload session:', error);
      throw error;
    }
  }

  // Upload file chunk for large file upload session
  async uploadFileChunk(uploadUrl: string, chunk: Buffer, start: number, end: number, totalSize: number) {
    try {
      const response = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Range': `bytes ${start}-${end - 1}/${totalSize}`,
          'Content-Length': chunk.length.toString(),
        },
        body: new Uint8Array(chunk)
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`Upload chunk failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error uploading file chunk:', error);
      throw error;
    }
  }

  // Delete file from SharePoint
  async deleteFile(driveId: string, itemId: string): Promise<void> {
    try {
      await this.graphClient
        .api(`/drives/${driveId}/items/${itemId}`)
        .delete();
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }

  // Search for items in SharePoint
  async searchItems(siteId: string, query: string): Promise<any[]> {
    try {
      const response = await this.graphClient
        .api(`/sites/${siteId}/drive/root/search(q='${encodeURIComponent(query)}')`)
        .get();
      
      return response.value || [];
    } catch (error) {
      console.error('Error searching items:', error);
      throw error;
    }
  }

  // Get user information
  async getCurrentUser() {
    try {
      const user = await this.graphClient
        .api('/me')
        .select('id,displayName,userPrincipalName,mail,jobTitle,department')
        .get();
      return user;
    } catch (error) {
      console.error('Error getting current user:', error);
      throw error;
    }
  }

  // Check user permissions on a site
  async getUserPermissions(siteId: string): Promise<any> {
    try {
      const permissions = await this.graphClient
        .api(`/sites/${siteId}/permissions`)
        .get();
      return permissions;
    } catch (error) {
      console.error('Error getting user permissions:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const sharePointService = new SharePointService();
