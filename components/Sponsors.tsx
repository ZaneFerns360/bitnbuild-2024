import React from 'react'
import SponsorImage from '@public/assets/sponsors.png'
import Image from 'next/image'
import { Bungee } from 'next/font/google'
import TitleSponsor from '@public/assets/sponsors/ManishJilogo.png'
import PoweredBy from '@public/assets/sponsors/Unstop_logo.jpg'
import BankingPartner from '@public/assets/sponsors/unionboi.png'
import EntPartner from '@public/assets/sponsors/no_escapelogo.png'
import GamingPartner from '@public/assets/sponsors/simplygaming_edited.png'
import Jdoodle from '@public/assets/sponsors/jdoodle.png'
import Link from 'next/link'
import './Sponsors.css'
import Threesixninelogo from '@public/assets/369logo.png'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Sponsors() {
  return (
    <>
      <div className="relative">
        <div className="sponsor-blur absolute inset-0 z-0 bg-cover"></div>
        <section
          className="relative z-10 py-3 text-gray-900 md:py-14"
          id="Sponsor"
        >
          <div className="mx-auto pt-4 text-center">
            <Image
              className="mx-auto text-center"
              src={SponsorImage}
              width={250}
              height={250}
              alt="about-us"
            />
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Title Sponsor
            </h1>
            <Image
              className="mx-auto mb-10 text-center"
              src={Threesixninelogo}
              width={350}
              height={350}
              alt="about-us"
            />
            <Image
              className="mx-auto text-center"
              src={TitleSponsor}
              width={350}
              height={350}
              alt="about-us"
            />
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Powered By
            </h1>
            <Image
              className="mx-auto text-center"
              src={PoweredBy}
              width={250}
              height={250}
              alt="about-us"
            />
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Banking Partner
            </h1>
            <Image
              className="mx-auto text-center"
              src={BankingPartner}
              width={200}
              height={200}
              alt="about-us"
            />
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Entertainment Partner
            </h1>
            <Image
              className="mx-auto text-center"
              src={EntPartner}
              width={200}
              height={200}
              alt="about-us"
            />
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Gaming Partner
            </h1>
            <Image
              className="mx-auto text-center"
              src={GamingPartner}
              width={300}
              height={300}
              alt="about-us"
            />
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Gold Sponsor
            </h1>
            <Link href="https://www.jdoodle.com/code-online-compiler-ide?utm_source=HackVSIT&utm_medium=Event&utm_campaign=Hackathon+Sponsorship">
              <Image
                className="mx-auto text-center"
                src={Jdoodle}
                width={300}
                height={300}
                alt="about-us"
              />
            </Link>
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Media Sponsor
            </h1>
            <Link href="https://startupnews.fyi/">
              <Image
                className="mx-auto text-center"
                src="/assets/startup.jpg"
                width={300}
                height={300}
                alt="about-us"
              />
            </Link>
            <h1
              className={
                bungee.className +
                ' my-3 mb-10 mt-20 text-2xl text-slate-200 sm:text-2xl'
              }
            >
              Beverage Sponsor
            </h1>
            <Link href="https://www.jdoodle.com/code-online-compiler-ide?utm_source=HackVSIT&utm_medium=Event&utm_campaign=Hackathon+Sponsorship">
              <Image
                className="mx-auto text-center"
                src="/assets/img/redbull.png"
                width={300}
                height={300}
                alt="about-us"
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
