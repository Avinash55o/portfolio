function CertificatesCard({ Title,Image, description, link }) {
  return (
    <div className='w-[300px] min-h-[250px] border border-[#BFACB5] dark:border-[#BFACB5]/40 dark:text-[#E5D0CC] p-4 flex flex-col rounded-sm hover:scale-102 transition-transform duration-300'>

      <h1 className='font-bold text-sm font-press mb-4'>{Title}</h1>
      <img src={Image} className="w-full items-center h-40 my-2"></img>
      <p className='text-xs h-[80px] dark:text-white/60 mb-2'>
        {description}
      </p>

      <div className='flex justify-between items-center text-[#7F7B82] dark:text-[#BFACB5] mt-auto gap-x-4'>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className='underline cursor-pointer text-[#7F7B82] dark:text-[#E5D0CC]/80 hover:text-[#BFACB5] dark:hover:text-[#BFACB5]'>
            Live
          </button>
        </a>
      </div>
    </div>
  );
}

export default CertificatesCard;
