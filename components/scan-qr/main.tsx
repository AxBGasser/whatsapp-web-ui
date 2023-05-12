import Instructions from './instructions'
import VideoTutorial from './videoTutorial'
import Header from './header'

export default function ScanQR() {
  return (
    <div
      className='flex flex-col w-full min-w-[520px] max-w-[1000px]  mx-auto h-fit text-white z-50 
        max-md-whatsapp:px-[36px] md-wa:px-auto overflow-hidden px-auto 
        before:left-0 before:bg-[#00a884] before:absolute before:top-0 before:w-full before:min-w-[520px] before:h-[222px] before:-z-10'>
      <Header />
      <Instructions />
      <VideoTutorial />
    </div>
  )
}
