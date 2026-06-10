import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="text-center max-w-2xl w-full">
        
        {/* Responsive Heading */}
        <h1 className="text-[100px] md:text-[180px] font-extrabold text-gray-100 select-none">
          404
        </h1>
        
        {/* Content Section */}
        <div className="-mt-16 md:-mt-32 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Page Not Found
          </h2>
          
          <p className="text-base md:text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Action Link */}
          <div className="pt-4">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-medium text-sm md:text-base rounded-full transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 active:scale-95"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;