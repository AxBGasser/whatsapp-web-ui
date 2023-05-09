import Image from 'next/image'

export default function ScanQR() {
  return (
    <>
      <div
        className='flex flex-col w-full min-w-[520px] max-w-[1000px]  mx-auto h-fit text-white z-50 
        max-md-whatsapp:px-[36px] md-wa:px-auto overflow-hidden
        before:left-0 before:bg-[#00a884] before:absolute before:top-0 before:w-screen before:h-[222px] before:-z-10'>
        <div
          className='header flex-1 h-fit flex justify-start items-center w-full min-w-[520px] max-w-[1000px] pt-[27px] pb-[28px]  min:md:px-auto base:mb-[66px]
        '>
          <span className='flex-0'>
            <svg xmlns='http://www.w3.org/2000/svg' width='39' height='39' viewBox='0 0 39 39'>
              <path
                fill='#00E676'
                d='M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z'></path>
              <path
                fill='#FFF'
                d='M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'></path>
            </svg>
          </span>
          <p className='flex-1 ml-[14px] uppercase text-[14px] font-sans font-medium'>Whatsapp Web</p>
        </div>
        <div className='flex flex-col flex-0 w-full h-fit overflow-hidden '>
          <div className='box flex flex-col smd-whatsapp:flex-row justify-center pb-[102px] smd-whatsapp:items-start items-center  p-[58px] rounded-t-[3px] bg-white text-black shadow-[0px_0px_50px_0px_#0b141a30,0px_0px_15px_0px_#0b141a3d]'>
            <div className='instructions w-full smd-whatsapp:min-w-[275px] shrink flex-1 '>
              <h2 className='text-[28px] text-[#41525D] font-light font-sans mb-[52px]'>
                Usa WhatsApp en tu computadora{' '}
              </h2>
              <div className=''>
                <ol className='pl-[25px] text-[18px] '>
                  <li>
                    <p className='text-[18px] text-[#3b4a54]'>Abre WhatsApp en tu teléfono.</p>
                  </li>
                  <li>
                    <p className='text-[18px] text-[#3b4a54] mt-[18px]'>
                      Toca <strong>Menu</strong>
                      [] o<strong>Configuracion</strong> [] y selecciona{' '}
                      <strong>Dispositivos Vinculados</strong>.
                    </p>
                  </li>
                  <li>
                    <p className='text-[18px] text-[#3b4a54] mt-[18px]'>
                      <span>
                        Toca <strong>Vincular un dispositivo</strong>.
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className='text-[18px] text-[#3b4a54] mt-[18px]'>
                      <span>Apunta el telefono hacia esta pantalla para escanear le codigo QR.</span>
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className='qr w-[264px] h-[264px] smd-whatsapp:ml-[60px] bg-slate-400 mt-10 smd-whatsapp:mt-0 mx-auto aspect-square'>
              <Image className='w-full' width={50} height={50} src={'/qr_gh.png'} alt={''} />
            </div>
          </div>
        </div>
        <div className='box flex flex-col w-full min-w-[520px] max-w-[1000px] overflow-hidden justify-center text-center smd-whatsapp:items-start items-center relative p-[40px] rounded-[0]  bg-[#f9f9fa] text-black '>
          {/* <div className='flex w-full  h-full flex-col  bg-[#0b141a06] text-black'> */}
          <h1 className=' w-full text-[28px] font-light text-[#3b4a54] mb-[16px]'>Tutorial</h1>
          <a
            rel='noopener noreferrer'
            className='w-full text-[#008069] mb-[40px]'
            href='https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=es'
            target='_blank'>
            ¿Necesitas ayuda para comenzar?
          </a>
          <div className='video w-[560px] h-[314px] mx-auto'>
            <video className='w-full' width={100} height={100} controls>
              <source src='' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </>
  )
}
