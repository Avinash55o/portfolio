import { useNavigate } from "react-router-dom"
import { FaGithub, FaArrowLeft } from "react-icons/fa"
import { MdConstruction } from "react-icons/md"

export default function NotAvailable() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen px-4">

      {/* Main Content Card */}
      <div className="border dark:border-white/30 rounded-sm p-10 max-w-lg w-full text-center bg-white/5 dark:bg-black/20 backdrop-blur-sm shadow-xl">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-orange-500/10 dark:bg-orange-500/20 rounded-full">
            <MdConstruction className="text-orange-500 dark:text-orange-400" size={48} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-4 dark:text-white font-press">
          LIVE DEMO NOT AVAILABLE
        </h1>

        {/* Description */}
        <p className="text-sm dark:text-white/70 mb-8 leading-relaxed">
          This project hasn't been deployed yet. You can still explore the source code on GitHub or check back later for the live version.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 font-semibold text-sm"
          >
            <FaArrowLeft size={14} />
            Go Back Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2.5 border dark:border-white/30 text-black dark:text-white rounded hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 font-semibold text-sm"
          >
            Previous Page
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t dark:border-white/10">
          <p className="text-xs dark:text-white/50 flex items-center justify-center gap-2">
            <FaGithub size={14} />
            Check the GitHub repository for source code
          </p>
        </div>

      </div>

    </div>
  )
}
