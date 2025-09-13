export default function LoadingState() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div 
          className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 mx-auto mb-4" 
          style={{borderBottomColor: '#2592D0'}}
        ></div>
        <p className="text-gray-600 text-sm sm:text-base">Loading dashboard...</p>
      </div>
    </div>
  );
}