import { useRouter } from 'next/navigation';

interface ErrorStateProps {
  error: string;
}

export default function ErrorState({ error }: ErrorStateProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-red-600 text-lg sm:text-2xl">⚠️</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Authentication Error</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">{error}</p>
          <button
            onClick={() => router.push('/login')}
            className="text-white px-6 py-3 rounded-lg transition-colors duration-200 active:scale-95 min-h-[44px] touch-manipulation font-medium"
            style={{backgroundColor: '#2592D0'}}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a7bb8')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2592D0')}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}