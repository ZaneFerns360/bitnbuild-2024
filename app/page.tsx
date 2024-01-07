import About from '@components/About'
import MultiLayerParallax from '@components/MultiLayerParallax'
import NavBar from '@components/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-[url('/assets/bg.png')]">
        {' '}
        <NavBar />
        <MultiLayerParallax />
      </div>

      <div className="w-full">
        <About />
      </div>
    </div>
  )
}
