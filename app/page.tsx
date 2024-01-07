import About from '@components/About'
import MultiLayerParallax from '@components/MultiLayerParallax'
import NavBar from '@components/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full ">
      <div className="h-screen bg-[url('/assets/bg.png')] bg-no-repeat">
        <div className="absolute inset-0 z-30 w-full bg-[url('/assets/mob.png')] bg-cover bg-no-repeat">
          <NavBar />
          <MultiLayerParallax />
        </div>{' '}
      </div>

      <div className="w-full bg-[url('/assets/img/minecraft-bg-mine.jpg')] bg-cover bg-no-repeat">
        <About />
      </div>
    </div>
  )
}
