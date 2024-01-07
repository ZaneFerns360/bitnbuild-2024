import About from '@components/About'
import MultiLayerParallax from '@components/MultiLayerParallax'
import NavBar from '@components/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <MultiLayerParallax />
      <div className="w-full">
        <About />
      </div>
    </div>
  )
}
