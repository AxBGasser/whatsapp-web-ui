import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import ScanQR from '@/components/scan-qr/main'

export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between relative overflow-x-auto'>
      <ScanQR />
    </main>
  )
}
