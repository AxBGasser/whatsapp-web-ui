export default function VideoTutorial() {
  return (
    <div className='box flex flex-col w-full overflow-hidden justify-center text-center smd-whatsapp:items-start items-center relative p-[40px] rounded-[0]  bg-[#f9f9fa] text-black '>
      <h1 className=' w-full text-[28px] font-light text-[#3b4a54] mb-[16px]'>Tutorial</h1>
      <a
        rel='noopener noreferrer'
        className='w-full text-[#008069] mb-[40px]'
        href='https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=es'
        target='_blank'>
        ¿Necesitas ayuda para comenzar?
      </a>
      <div className='video max-w-[560px] max-h-[314px] mx-auto'>
        <video className='w-full ' width={100} height={100} controls>
          <source src='' type='video/mp4' />
        </video>
      </div>
    </div>
  )
}
