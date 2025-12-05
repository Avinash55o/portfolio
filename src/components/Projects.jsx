import ProjectCard from './ProjectCard'
import { ProjectData } from '../data/ProjectData'
import { useState } from 'react'


function Projects() {
 const [visible,setVisible] = useState(3) 

 const showMore = ()=>{
  setVisible(visible + 3)
 }

  const showLess = ()=>{
  setVisible(visible - 3)
 }

 console.log(ProjectData)

 return (
<div className='w-full flex flex-col gap-y-4'>
     <div className='mx-auto'>
            <h1 className='font-press dark:text-white'>PROJECTS</h1>
     </div>
    <div className='py-3 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4'>
        {ProjectData.slice(0,visible).map((project) => (
          <ProjectCard
            key={project.id}
            projectName={project.projectName}
            description={project.description}
            link={project.link}
            github={project.github}
            tech={project.tech}
          />
         ))}
      </div>
      {
        visible < ProjectData.length && (
          <div onClick={showMore} className='mx-auto dark:text-white text-xs border dark:border-white/30 px-1 py-2 rounded-sm hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>Load more</div>
        )
      }
       {
        visible > 3 && (
          <div onClick={showLess} className='mx-auto dark:text-white text-xs border dark:border-white/30 px-1 py-2 rounded-sm hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>Show less</div>
        )
       }
    </div>
  )
}

export default Projects