import React, { useContext } from 'react'
import { FaGithub } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6"
import { DarkThemeContext } from '../context/DarkThemeContext';
import { FaMoon } from "react-icons/fa";

function Navbar() {
  const { isDark, setIsDark } = useContext(DarkThemeContext)

  const toggleDarkTheme = () => {
    if (isDark === "dark") {
      setIsDark("")
    } else {
      setIsDark("dark")
    }
  }

  return (
    <div className='flex py-3 justify-center text-[#172121] dark:text-[#E5D0CC]'>
      <div className='flex px-2 fixed max-w-[340px] md:max-w-4xl w-full justify-between bg-[#E5D0CC]/85 dark:bg-[#444554]/80 backdrop-blur-lg rounded-sm items-center shadow-lg py-1  '>
        <div>
          <img src='/profilePic.jpeg' className='h-[29px] w-[29px] rounded-full  ' />
        </div>
        <div className='flex gap-x-4 md:gap-x-6 items-center '>

          <div onClick={toggleDarkTheme} className='cursor-pointer'>
            {
              isDark === "dark" ? <FaMoon size={20} /> : <FiSun size={20} />
            }

          </div>
          <a href='https://github.com/avinash55o' target='_blank'><div className='cursor-pointer'> <FaGithub size={20} /></div> </a>
          <a href='https://x.com/avinash_boruah' target='_blank'><div className='cursor-pointer' > <FaXTwitter size={20} /></div></a>
        </div>

      </div>
    </div>
  )
}

export default Navbar