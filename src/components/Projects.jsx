import ProjectCard from './ProjectCard'
import ProjectCardSkeleton from './ProjectCardSkeleton'
import { ProjectName } from '../data/ProjectData'
import { fetchAllProjects } from '../utils/fetchGitHubprojects'
import { useState, useEffect } from 'react'

function Projects() {
  const [visible, setVisible] = useState(3)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch projects from GitHub on component mount
  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true)
        const fetchedProjects = await fetchAllProjects(ProjectName)
        await new Promise(resolve => (setTimeout(resolve, 1500)))
        setProjects(fetchedProjects)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const showMore = () => {
    setVisible(visible + 3)
  }

  const showLess = () => {
    setVisible(visible - 3)
  }

  // Loading state
  if (loading) {
    return (
      <div className='w-full flex flex-col gap-y-4'>
        <div className='mx-auto'>
          <h1 className='font-press text-[#172121] dark:text-[#E5D0CC]'>PROJECTS</h1>
        </div>
        <div className='py-3 grid grid-col-1 md:grid-cols-3 mx-auto gap-4'>
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton /></div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className='w-full flex flex-col gap-y-4'>
        <div className='mx-auto'>
          <h1 className='font-press text-[#172121] dark:text-[#E5D0CC]'>PROJECTS</h1>
        </div>
        <div className='mx-auto text-[#7F7B82] dark:text-[#BFACB5]'>
          Error loading projects: {error}
        </div>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col gap-y-4'>
      <div className='mx-auto'>
        <h1 className='font-press text-[#172121] dark:text-[#E5D0CC]'>PROJECTS</h1>
      </div>
      <div className='py-3 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4'>
        {projects.slice(0, visible).map((project) => (
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
        visible < projects.length && (
          <div onClick={showMore} className='mx-auto dark:text-[#E5D0CC] text-xs border border-[#BFACB5] dark:border-[#BFACB5]/40 px-1 py-2 rounded-sm hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>Load more</div>
        )
      }
      {
        visible > 3 && (
          <div onClick={showLess} className='mx-auto dark:text-[#E5D0CC] text-xs border border-[#BFACB5] dark:border-[#BFACB5]/40 px-1 py-2 rounded-sm hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>Show less</div>
        )
      }
    </div>
  )
}

export default Projects