// SharePoint utility functions and type definitions
import { sharePointService } from './graphClient';

// SharePoint list item interfaces specific to WSA portal
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  body: string;
  published: string;
  imageUrl?: string;
  createdDateTime: string;
  lastModifiedDateTime: string;
}

export interface EventItem {
  id: string;
  title: string;
  start: string;
  end: string;
  location: string;
  description: string;
  createdDateTime: string;
  lastModifiedDateTime: string;
}

// Convert raw SharePoint list item to typed NewsItem
export function mapToNewsItem(item: { id: string; fields: Record<string, unknown>; createdDateTime: string; lastModifiedDateTime: string }): NewsItem {
  return {
    id: item.id,
    title: typeof item.fields.Title === 'string' ? item.fields.Title : '',
    summary: typeof item.fields.Summary === 'string' ? item.fields.Summary : '',
    body: typeof item.fields.Body === 'string' ? item.fields.Body : '',
    published: typeof item.fields.Published === 'string' ? item.fields.Published : item.createdDateTime,
    imageUrl: typeof item.fields.ImageUrl === 'string' ? item.fields.ImageUrl : undefined,
    createdDateTime: item.createdDateTime,
    lastModifiedDateTime: item.lastModifiedDateTime,
  };
}

// Convert raw SharePoint list item to typed EventItem
export function mapToEventItem(item: { id: string; fields: Record<string, unknown>; createdDateTime: string; lastModifiedDateTime: string }): EventItem {
  return {
    id: item.id,
    title: typeof item.fields.Title === 'string' ? item.fields.Title : '',
    start: typeof item.fields.Start === 'string' ? item.fields.Start : '',
    end: typeof item.fields.End === 'string' ? item.fields.End : '',
    location: typeof item.fields.Location === 'string' ? item.fields.Location : '',
    description: typeof item.fields.Description === 'string' ? item.fields.Description : '',
    createdDateTime: item.createdDateTime,
    lastModifiedDateTime: item.lastModifiedDateTime,
  };
}

// News operations
export class NewsService {
  private siteId = process.env.SP_SITE_ID!;
  private listId = process.env.SP_NEWS_LIST_ID!;

  async getAllNews(options?: {
    top?: number;
    filter?: string;
    orderBy?: string;
  }): Promise<NewsItem[]> {
    const result = await sharePointService.getListItems(this.siteId, this.listId, {
      ...options,
      orderBy: options?.orderBy || 'fields/Published desc',
    });
    
    return result.items.map(mapToNewsItem);
  }

  async getNewsById(id: string): Promise<NewsItem | null> {
    try {
      const result = await sharePointService.getListItems(this.siteId, this.listId, {
        filter: `id eq '${id}'`,
        top: 1,
      });
      
      if (result.items.length === 0) {
        return null;
      }
      
      return mapToNewsItem(result.items[0]);
    } catch (error) {
      console.error('Error getting news by ID:', error);
      return null;
    }
  }

  async createNews(news: Omit<NewsItem, 'id' | 'createdDateTime' | 'lastModifiedDateTime'>): Promise<NewsItem> {
    const fields = {
      Title: news.title,
      Summary: news.summary,
      Body: news.body,
      Published: news.published,
      ImageUrl: news.imageUrl || null,
    };

    const result = await sharePointService.createListItem(this.siteId, this.listId, fields);
    return mapToNewsItem(result);
  }

  async updateNews(id: string, news: Partial<Omit<NewsItem, 'id' | 'createdDateTime' | 'lastModifiedDateTime'>>): Promise<NewsItem> {
    const fields: Record<string, unknown> = {};
    
    if (news.title !== undefined) fields.Title = news.title;
    if (news.summary !== undefined) fields.Summary = news.summary;
    if (news.body !== undefined) fields.Body = news.body;
    if (news.published !== undefined) fields.Published = news.published;
    if (news.imageUrl !== undefined) fields.ImageUrl = news.imageUrl;

    const result = await sharePointService.updateListItem(this.siteId, this.listId, id, fields);
    return mapToNewsItem(result);
  }

  async deleteNews(id: string): Promise<void> {
    await sharePointService.deleteListItem(this.siteId, this.listId, id);
  }
}

// Events operations
export class EventsService {
  private siteId = process.env.SP_SITE_ID!;
  private listId = process.env.SP_EVENTS_LIST_ID!;

  async getAllEvents(options?: {
    top?: number;
    filter?: string;
    orderBy?: string;
  }): Promise<EventItem[]> {
    const result = await sharePointService.getListItems(this.siteId, this.listId, {
      ...options,
      orderBy: options?.orderBy || 'fields/Start asc',
    });
    
    return result.items.map(mapToEventItem);
  }

  async getEventById(id: string): Promise<EventItem | null> {
    try {
      const result = await sharePointService.getListItems(this.siteId, this.listId, {
        filter: `id eq '${id}'`,
        top: 1,
      });
      
      if (result.items.length === 0) {
        return null;
      }
      
      return mapToEventItem(result.items[0]);
    } catch (error) {
      console.error('Error getting event by ID:', error);
      return null;
    }
  }

  async createEvent(event: Omit<EventItem, 'id' | 'createdDateTime' | 'lastModifiedDateTime'>): Promise<EventItem> {
    const fields = {
      Title: event.title,
      Start: event.start,
      End: event.end,
      Location: event.location,
      Description: event.description,
    };

    const result = await sharePointService.createListItem(this.siteId, this.listId, fields);
    return mapToEventItem(result);
  }

  async updateEvent(id: string, event: Partial<Omit<EventItem, 'id' | 'createdDateTime' | 'lastModifiedDateTime'>>): Promise<EventItem> {
    const fields: Record<string, unknown> = {};
    
    if (event.title !== undefined) fields.Title = event.title;
    if (event.start !== undefined) fields.Start = event.start;
    if (event.end !== undefined) fields.End = event.end;
    if (event.location !== undefined) fields.Location = event.location;
    if (event.description !== undefined) fields.Description = event.description;

    const result = await sharePointService.updateListItem(this.siteId, this.listId, id, fields);
    return mapToEventItem(result);
  }

  async deleteEvent(id: string): Promise<void> {
    await sharePointService.deleteListItem(this.siteId, this.listId, id);
  }

  // Get upcoming events (next 30 days)
  async getUpcomingEvents(days: number = 30): Promise<EventItem[]> {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + days);
    
    const filter = `fields/Start ge '${startDate.toISOString()}' and fields/Start le '${endDate.toISOString()}'`;
    
    return this.getAllEvents({
      filter,
      orderBy: 'fields/Start asc',
    });
  }
}

// Files operations
export class FilesService {
  private driveId = process.env.SP_ASSETS_DRIVE_ID!;

  async getAllFiles(folderId?: string) {
    return await sharePointService.getDriveItems(this.driveId, folderId);
  }

  async uploadFile(fileName: string, fileContent: Buffer, folderId?: string) {
    const fileSize = fileContent.length;
    
    // Use upload session for files larger than 4MB
    if (fileSize > 4 * 1024 * 1024) {
      return await this.uploadLargeFile(fileName, fileContent, fileSize, folderId);
    } else {
      return await sharePointService.uploadFile(this.driveId, fileName, fileContent, folderId);
    }
  }

  private async uploadLargeFile(fileName: string, fileContent: Buffer, fileSize: number, folderId?: string) {
    // Create upload session
    const uploadSession = await sharePointService.createUploadSession(
      this.driveId,
      fileName,
      fileSize,
      folderId
    );

    const chunkSize = 320 * 1024; // 320KB chunks
    const totalChunks = Math.ceil(fileSize / chunkSize);
    
    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, fileSize);
      const chunk = fileContent.slice(start, end);
      
      const result = await sharePointService.uploadFileChunk(
        uploadSession.uploadUrl,
        chunk,
        start,
        end,
        fileSize
      );
      
      // If upload is complete, return the result
      if (result.id) {
        return result;
      }
    }
    
    throw new Error('Large file upload failed');
  }

  async deleteFile(itemId: string) {
    await sharePointService.deleteFile(this.driveId, itemId);
  }

  async searchFiles(query: string) {
    const siteId = process.env.SP_SITE_ID!;
    return await sharePointService.searchItems(siteId, query);
  }
}

// Export service instances
export const newsService = new NewsService();
export const eventsService = new EventsService();
export const filesService = new FilesService();

// Utility functions
export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function isImageFile(mimeType?: string): boolean {
  if (!mimeType) return false;
  return mimeType.startsWith('image/');
}

export function getFileIcon(mimeType?: string): string {
  if (!mimeType) return '📄';
  
  if (mimeType.startsWith('image/')) return '🖼️';
  if (mimeType.includes('pdf')) return '📄';
  if (mimeType.includes('word') || mimeType.includes('document')) return '📝';
  if (mimeType.includes('excel') || mimeType.includes('spreadsheet')) return '📊';
  if (mimeType.includes('powerpoint') || mimeType.includes('presentation')) return '📽️';
  if (mimeType.includes('video')) return '🎥';
  if (mimeType.includes('audio')) return '🎵';
  if (mimeType.includes('zip') || mimeType.includes('archive')) return '📦';
  
  return '📄';
}
