import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";


function ProjectCard({ projectName, description, link, github, tech }) {
  return (
    <div className='w-[300px] min-h-[270px] border border-[#BFACB5] dark:border-[#BFACB5]/40 dark:text-[#E5D0CC] p-4 flex flex-col rounded-sm hover:scale-102 transition-transform duration-300'>

      <h1 className='font-bold text-sm font-press mb-2'>{projectName}</h1>

      <p className='text-xs line-clamp-3 dark:text-white/60 mb-3'>
        {description}
      </p>

      <div className="mb-3 flex flex-wrap gap-2">
        {tech.map((techs, index) => (
          <button
            key={index}
            className="border border-[#BFACB5] dark:border-[#BFACB5]/40 h-[24px] px-2 text-xs rounded"
          >
            {techs}
          </button>
        ))}
      </div>

      <div className='flex justify-between items-center text-[#7F7B82] dark:text-[#BFACB5] mt-auto gap-x-4'>
        {link.startsWith('/') ? (
          <Link to={link}>
            <button className='underline cursor-pointer text-[#7F7B82] dark:text-[#E5D0CC]/80 hover:text-[#BFACB5] dark:hover:text-[#BFACB5]'>
              Live
            </button>
          </Link>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className='underline cursor-pointer text-[#7F7B82] dark:text-[#E5D0CC]/80 hover:text-[#BFACB5] dark:hover:text-[#BFACB5]'>
              Live
            </button>
          </a>
        )}
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className='cursor-pointer text-[#7F7B82] dark:text-[#E5D0CC]/80 hover:text-[#BFACB5] dark:hover:text-[#BFACB5]'>
            <FaGithub size={25} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
