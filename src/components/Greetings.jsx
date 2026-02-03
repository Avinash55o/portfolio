import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

function Greetings() {
   const [emailCopyMessage,setEmailCopyMessage] = useState(false) 
   const handleEmailCopy = async()=>{
    try {
        await navigator.clipboard.writeText("avinashboruah01@gmail.com")
        setEmailCopyMessage(true)
    } catch (error) {
        console.log("failed to copy",error)
        alert("Copy failed")
    }
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
        <div className='flex text-blue-600 dark:text-blue-400   mx-auto gap-x-2'>
            <h1 className='underline text-blue-500 cursor-pointer'>Email</h1>
            <button onClick={handleEmailCopy} className='cursor-pointer text-black/60 dark:text-white/60'><MdContentCopy size={15}/></button>
        </div>
        
          
                <div className={`${emailCopyMessage ? "opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"} inset-0 justify-center flex items-center fixed z-40 transition-all duration-300 `}>

                    <div className="inset-0 absolute  bg-white/40 backdrop-blur-xs"/>
                    <div className="flex  relative">
                     <p className="border rounded-sm p-2 z-50 shadow-lg bg-white text-xs dark:text-black">Email Copied Successfully</p>
                     <h1 onClick={()=>{setEmailCopyMessage(false)}} className="text-end cursor-pointer text-black z-50 absolute -top-5 right-0">X</h1>
                    </div>
                  
                    
                </div>
            
        
    </div>
  )
}

export default Greetings