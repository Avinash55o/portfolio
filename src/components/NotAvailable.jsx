import { useNavigate } from "react-router-dom"
import { FaGithub, FaArrowLeft } from "react-icons/fa"
import { MdConstruction } from "react-icons/md"

export default function NotAvailable() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen px-4">

      {/* Main Content Card */}
      <div className="border border-[#BFACB5] dark:border-[#BFACB5]/40 rounded-sm p-10 max-w-lg w-full text-center bg-[#E5D0CC]/10 dark:bg-[#444554]/40 backdrop-blur-sm shadow-xl">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-[#BFACB5]/20 dark:bg-[#BFACB5]/30 rounded-full">
            <MdConstruction className="text-[#7F7B82] dark:text-[#BFACB5]" size={48} />
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
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#BFACB5] dark:bg-[#BFACB5] text-[#172121] rounded hover:bg-[#7F7B82] dark:hover:bg-[#7F7B82] transition-all duration-300 hover:scale-105 font-semibold text-sm"
          >
            <FaArrowLeft size={14} />
            Go Back Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2.5 border border-[#BFACB5] dark:border-[#BFACB5] text-black dark:text-[#E5D0CC] rounded hover:bg-[#BFACB5]/20 dark:hover:bg-[#444554] transition-all duration-300 hover:scale-105 font-semibold text-sm"
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
