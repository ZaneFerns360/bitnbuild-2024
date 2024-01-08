import About from '@components/About'
import MultiLayerParallax from '@components/MultiLayerParallax'
import NavBar from '@components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full ">
      <div className="h-screen bg-no-repeat">
        <div className="absolute inset-0 z-30 h-screen  w-full bg-cover bg-no-repeat">
          <NavBar />
          <MultiLayerParallax />
        </div>{' '}
      </div>

      <div className="w-full  bg-cover bg-no-repeat">
        <About />
      </div>
    </div>
  )
}
