import { Spotlight } from './ui/Spotlight';
import { cn } from '@/lib/utils';
import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlight effects */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
         absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
           bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero content - SEMUA dalam satu container dengan z-10 */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Subtitle */}
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">Dynamic Web Magic with Next.js</h2>

          {/* Main title with animation */}
          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl mb-4" words="Transform Your Ideas into Reality with Next.js" />

          {/* Description - sekarang dalam container yang sama */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi Im Dzikri Setiawan</p>

          {/* Call to action button */}
          <a href="#about">
            <MagicButton title="Explore My Work" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
