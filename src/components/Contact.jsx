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
            color: 'hover:text-[#7F7B82] dark:hover:text-[#BFACB5]'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/avinash-boruah-7a4380250/',
            color: 'hover:text-[#7F7B82] dark:hover:text-[#BFACB5]'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:avinashboruah01@gmail.com',
            color: 'hover:text-[#7F7B82] dark:hover:text-[#BFACB5]'
        },
        {
            name: 'X',
            icon: FaTwitter,
            url: 'https://x.com/avinash_boruah',
            color: 'hover:text-[#7F7B82] dark:hover:text-[#BFACB5]'
        }
    ]

    return (
        <div className='w-full flex flex-col gap-y-6 my-8'>
            {/* Header */}
            <div className='mx-auto'>
                <h1 className='font-press text-[#172121] dark:text-[#E5D0CC]'>GET IN TOUCH</h1>
            </div>

            {/* Main Content */}
            <div className='mx-auto border border-[#BFACB5] dark:border-[#BFACB5]/50 rounded-sm p-8 bg-[#E5D0CC]/10 dark:bg-[#444554]/40 max-w-2xl w-full'>
                <div className='flex flex-col items-center gap-6'>

                    {/* Message */}
                    <div className='text-center space-y-3'>
                        <p className='text-lg text-[#172121] dark:text-[#E5D0CC] font-semibold'>
                            Let's work together!
                        </p>
                        <p className='text-sm text-[#172121]/70 dark:text-[#E5D0CC]/70 max-w-md'>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </div>

                    {/* Email Section */}
                    <div className='flex flex-col items-center gap-3 w-full'>
                        <div className='flex items-center gap-3 bg-[#E5D0CC]/20 dark:bg-[#172121]/50 border border-[#BFACB5] dark:border-[#BFACB5]/40 rounded-sm px-4 py-3 w-full max-w-md'>
                            <FaEnvelope className='text-[#BFACB5] dark:text-[#BFACB5]' size={20} />
                            <a
                                href='mailto:avinashboruah01@gmail.com'
                                className='text-sm text-[#172121] dark:text-[#E5D0CC] hover:text-[#BFACB5] dark:hover:text-[#BFACB5] transition-colors flex-1'
                            >
                                avinashboruah01@gmail.com
                            </a>
                            <button
                                onClick={handleEmailCopy}
                                className='cursor-pointer text-[#172121]/70 dark:text-[#E5D0CC]/70 hover:text-[#BFACB5] dark:hover:text-[#BFACB5] transition-colors'
                                title='Copy email'
                            >
                                <MdContentCopy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='flex flex-col items-center gap-4 w-full'>
                        <p className='text-xs text-[#172121]/60 dark:text-[#E5D0CC]/60 uppercase tracking-wider'>
                            Connect with me
                        </p>
                        <div className='flex gap-6'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`text-[#172121]/80 dark:text-[#E5D0CC]/80 ${social.color} transition-all duration-300 hover:scale-110`}
                                    title={social.name}
                                >
                                    <social.icon size={28} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Message */}
                    <div className='text-center mt-4'>
                        <p className='text-xs text-[#172121]/50 dark:text-[#E5D0CC]/50'>
                            Feel free to reach out for collaborations or just a friendly chat
                        </p>
                    </div>

                </div>
            </div>

            {/* Copy Success Message */}
            <div className={`${emailCopyMessage ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} inset-0 justify-center flex items-center fixed z-40 transition-all duration-300`}>
                <div className="inset-0 absolute bg-white/40 backdrop-blur-xs" />
                <div className="flex relative">
                    <p className="border border-[#BFACB5] rounded-sm p-3 z-50 shadow-lg bg-[#E5D0CC] text-sm text-[#172121] font-semibold">
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
