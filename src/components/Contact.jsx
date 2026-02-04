import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'

function Contact() {
    const [emailCopyMessage, setEmailCopyMessage] = useState(false)

    const handleEmailCopy = async () => {
        try {
            await navigator.clipboard.writeText("avinashboruah01@gmail.com")
            setEmailCopyMessage(true)
            setTimeout(() => setEmailCopyMessage(false), 2000)
        } catch (error) {
            console.log("Failed to copy", error)
            alert("Copy failed")
        }
    }

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/Avinash55o',
            color: 'hover:text-gray-800 dark:hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/avinash-boruah-7a4380250/',
            color: 'hover:text-blue-600 dark:hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:avinashboruah01@gmail.com',
            color: 'hover:text-red-500 dark:hover:text-red-400'
        },
        {
            name: 'X',
            icon: FaTwitter,
            url: 'https://x.com/avinash_boruah',
            color: 'hover:text-blue-400 dark:hover:text-blue-300'
        }
    ]

    return (
        <div className='w-full flex flex-col gap-y-6 my-8'>
            {/* Header */}
            <div className='mx-auto'>
                <h1 className='font-press dark:text-white'>GET IN TOUCH</h1>
            </div>

            {/* Main Content */}
            <div className='mx-auto border dark:border-white/30 rounded-sm p-8 bg-white/5 dark:bg-black/20 max-w-2xl w-full'>
                <div className='flex flex-col items-center gap-6'>

                    {/* Message */}
                    <div className='text-center space-y-3'>
                        <p className='text-lg dark:text-white/90 font-semibold'>
                            Let's work together!
                        </p>
                        <p className='text-sm dark:text-white/60 max-w-md'>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </div>

                    {/* Email Section */}
                    <div className='flex flex-col items-center gap-3 w-full'>
                        <div className='flex items-center gap-3 bg-white/10 dark:bg-white/5 border dark:border-white/20 rounded-sm px-4 py-3 w-full max-w-md'>
                            <FaEnvelope className='text-blue-500 dark:text-blue-400' size={20} />
                            <a
                                href='mailto:avinashboruah01@gmail.com'
                                className='text-sm dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex-1'
                            >
                                avinashboruah01@gmail.com
                            </a>
                            <button
                                onClick={handleEmailCopy}
                                className='cursor-pointer text-black/60 dark:text-white/60 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
                                title='Copy email'
                            >
                                <MdContentCopy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='flex flex-col items-center gap-4 w-full'>
                        <p className='text-xs dark:text-white/60 uppercase tracking-wider'>
                            Connect with me
                        </p>
                        <div className='flex gap-6'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`text-black/70 dark:text-white/70 ${social.color} transition-all duration-300 hover:scale-110`}
                                    title={social.name}
                                >
                                    <social.icon size={28} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Message */}
                    <div className='text-center mt-4'>
                        <p className='text-xs dark:text-white/50'>
                            Feel free to reach out for collaborations or just a friendly chat
                        </p>
                    </div>

                </div>
            </div>

            {/* Copy Success Message */}
            <div className={`${emailCopyMessage ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} inset-0 justify-center flex items-center fixed z-40 transition-all duration-300`}>
                <div className="inset-0 absolute bg-white/40 backdrop-blur-xs" />
                <div className="flex relative">
                    <p className="border rounded-sm p-3 z-50 shadow-lg bg-white text-sm dark:text-black font-semibold">
                        ✓ Email Copied Successfully
                    </p>
                    <h1
                        onClick={() => setEmailCopyMessage(false)}
                        className="text-end cursor-pointer text-black z-50 absolute -top-6 right-0 hover:scale-110 transition-transform"
                    >
                        ✕
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Contact
