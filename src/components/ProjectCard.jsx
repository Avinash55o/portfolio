import { FaGithub } from "react-icons/fa6";

function ProjectCard({ projectName, description, link, github, tech }) {
  return (
    <div className='w-[300px] min-h-[250px] border dark:border-white/30 dark:text-white p-4 flex flex-col rounded-sm hover:scale-102 transition-transform duration-300'>
      
      <h1 className='font-bold text-sm font-press mb-2'>{projectName}</h1>

      <p className='text-xs h-[80px] dark:text-white/60 mb-2'>
        {description}
      </p>

      <div className="mb-3 flex flex-wrap gap-2">
        {tech.map((techs, index) => (
          <button
            key={index}
            className="border dark:border-white/30 border-black/60 h-[24px] px-2 text-xs rounded"
          >
            {techs}
          </button>
        ))}
      </div>

      <div className='flex justify-between items-center text-blue-700 mt-auto gap-x-4'>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className='underline cursor-pointer dark:text-white/70 dark:hover:text-white'>
            Live
          </button>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className='cursor-pointer dark:text-white/70 dark:hover:text-white'>
            <FaGithub size={25} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
