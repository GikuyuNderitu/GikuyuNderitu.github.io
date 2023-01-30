'use client';

import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import Card from './card';
import Logo from './logo';
import MainCodeCarousel from './main_code_carousel';
import { righteous } from './fonts';
import { hike } from './images';

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col justify-center items-center h-[65vh]">
        <Logo size="large" />
        <p className="my-4 text-xl font-mono text-center text-black dark:text-white">
          The dev your boss tells you not to worry about
        </p>
      </section>

      <div className="flex flex-col items-center max-w-xl sm:max-w-4xl">
        <ParallaxProvider>
          <MainCodeCarousel />

        </ParallaxProvider>
      </div>
      <section className='mt-8 mx-6 max-w-lg min-w-[80vw] sm:min-w-[600px] flex flex-col items-stretch'>
        <h2 className={righteous.className + " text-black dark:text-white text-2xl py-4"}>Discover</h2>
        <div className="flex flex-wrap justify-between">
          <Card title="Work" />
          <Card title="About">
            <Image src={hike} alt="Me on a hike" />
          </Card>
        </div>
      </section>
    </main>
  );
}