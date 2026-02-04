function ProjectCardSkeleton() {
  return (
    <div className='w-[300px] min-h-[280px] border border-[#BFACB5] dark:border-[#BFACB5]/40 p-4 flex flex-col rounded-sm animate-pulse'>

      {/* Project name skeleton */}
      <div className='h-4 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-3/4 mb-2'></div>

      {/* Description skeleton - 4 lines */}
      <div className='space-y-2 mb-3'>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-full'></div>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-full'></div>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-5/6'></div>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-4/6'></div>
      </div>

      {/* Tech stack skeleton */}
      <div className='mb-3 flex flex-wrap gap-2 flex-grow'>
        <div className='h-6 w-16 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded'></div>
        <div className='h-6 w-20 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded'></div>
        <div className='h-6 w-14 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded'></div>
      </div>

      {/* Buttons skeleton */}
      <div className='flex justify-between items-center mt-auto gap-x-4'>
        <div className='h-4 w-12 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded'></div>
        <div className='h-6 w-6 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded-full'></div>
      </div>
    </div>
  );
}

export default ProjectCardSkeleton;