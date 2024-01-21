import About from '@components/About'
import Faq from '@components/Faq'
import Footer from '@components/Footer'
import MultiLayerParallax from '@components/MultiLayerParallax'
import NavBar from '@components/NavBar'
import { Prizes } from '@components/Prizes'
import Timeline from '@components/Timeline'
import Timeline2 from '@components/Timeline2'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      <div className="h-screen bg-no-repeat">
        <div className="absolute inset-0 z-30   w-full bg-cover bg-no-repeat">
          {/* <NavBar /> */}
          <MultiLayerParallax />
        </div>{' '}
      </div>

      <div className="w-full bg-[#1a1c28]">
        <About />
        <Prizes />
        <Timeline />
        {/*  <Timeline2 /> */}
        <Faq />
        <Footer />
      </div>
    </div>
  )
}
