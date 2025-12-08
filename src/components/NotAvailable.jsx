import { useNavigate } from "react-router-dom";
export default function NotAvailable() {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black/90 px-4">
      
      <div className="bg-white dark:bg-gray-900 border dark:border-white/20 rounded-md p-8 max-w-md w-full text-center shadow-lg">
        
        <h1 className="text-2xl font-bold mb-3 dark:text-white font-press">
          Live Demo Not Available
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          This project hasn’t been deployed yet.  
          You can still explore the source code on GitHub or check back later.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 font-press text-sm text-white/80 border dark:border-white/60 border-black/60  rounded transition-all"
        >
          Go Back
        </button>

      </div>

    </div>
  );
}
