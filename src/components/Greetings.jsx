import { FaFileDownload, FaEye } from "react-icons/fa"

function Greetings() {
    // Path to your resume in the public folder
    const resumePath = "/assets/resume.pdf"

    const handleViewResume = () => {
        // Opens resume in a new tab
        window.open(resumePath, '_blank')
    }

    const handleDownloadResume = () => {
        // Creates a download link and triggers it
        const link = document.createElement('a')
        link.href = resumePath
        link.download = 'Avinash_Boruah_Resume.pdf' // Name of the downloaded file
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className='flex flex-col mx-auto max-w-4xl py-10 text-center mt-15 space-y-3 dark:text-white'>
            <div className=' font-press font-bold text-sm'>
                <h1>Hi, I'm Avinash Boruah</h1>
            </div>
            <div>
                <h1>{"{ Software Developer }"}</h1>
            </div>
            <div className='font-semibold max-w-2xs mx-auto md:max-w-xl text-sm'>
                <p>A curious software developer ... exploring full-stack development and AI, learning as I build</p>
            </div>

            {/* Resume Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 mx-auto pt-2'>
                <button
                    onClick={handleViewResume}
                    className='flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 font-semibold text-sm'
                >
                    <FaEye size={16} />
                    View Resume
                </button>

                <button
                    onClick={handleDownloadResume}
                    className='flex items-center justify-center gap-2 px-5 py-2 border dark:border-white/30 text-black dark:text-white rounded hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 font-semibold text-sm'
                >
                    <FaFileDownload size={16} />
                    Download Resume
                </button>
            </div>
        </div>
    )
}

export default Greetings