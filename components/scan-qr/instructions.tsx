import Image from 'next/image'
import MenuIcon from '@/components/scan-qr/icons/menu'
import ConfigIcon from '@/components/scan-qr/icons/config'

export default function Instructions() {
  return (
    <div className='flex flex-col flex-0 w-full h-fit overflow-hidden '>
      <div className='flex flex-col smd-whatsapp:flex-row justify-center pb-[102px] smd-whatsapp:items-start items-center  p-[58px] rounded-t-[3px] bg-white text-black shadow-[0px_0px_50px_0px_#0b141a30,0px_0px_15px_0px_#0b141a3d]'>
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
                <p className='text-[18px] text-[#3b4a54] mt-[18px] flow-root'>
                  Toca <strong>Menu</strong>
                  <MenuIcon />o<strong> Configuracion</strong> <ConfigIcon /> y selecciona{' '}
                  <strong>Dispositivos Vinculados</strong>.
                </p>
              </li>
              <li>
                <p className='text-[18px] text-[#3b4a54] mt-[18px]'>
                  <span>
                    Toca
                    <strong>Vincular un dispositivo</strong>.
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
          <Image className='w-full' width={50} height={50} src={'/qr_gh.png'} alt={'whatsapp-logo'} />
        </div>
      </div>
    </div>
  )
}
