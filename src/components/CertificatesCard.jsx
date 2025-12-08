function CertificatesCard({ Title,Image, description, link }) {
  return (
    <div className='w-[300px] min-h-[250px] border dark:border-white/30 dark:text-white p-4 flex flex-col rounded-sm hover:scale-102 transition-transform duration-300'>
      
      <h1 className='font-bold text-sm font-press mb-4'>{Title}</h1>
      <img src={Image} className="w-full items-center h-40 my-2"></img>
      <p className='text-xs h-[80px] dark:text-white/60 mb-2'>
        {description}
      </p>

      <div className='flex justify-between items-center text-blue-700 mt-auto gap-x-4'>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className='underline cursor-pointer dark:text-white/70 dark:hover:text-white'>
            Live
          </button>
        </a>
      </div>
    </div>
  );
}

export default CertificatesCard;
