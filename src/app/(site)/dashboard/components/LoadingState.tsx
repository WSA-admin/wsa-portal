export default function LoadingState() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div 
          className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" 
          style={{borderBottomColor: '#2592D0'}}
        ></div>
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    </div>
  );
}