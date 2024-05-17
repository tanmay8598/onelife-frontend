"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Waypoint } from "react-waypoint";

const Section2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <section className="bg-white lg:mt-28">
      <div className="relative flex flex-col  mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:px-8 lg:mt-20 lg:mb-20">
        <p className="text-orange font-pacifico lg:text-[36px]">Destinations</p>
        <p className="text-3xl mt-2 font-extrabold lg:text-[40px] lg:w-[70%] lg:mt-[10px] leading-none">
          The UAE Experience !
        </p>
        <p className="text-sm mt-5 text-justify lg:w-[33%] lg:text-lg">
          Uncover the finest sights and experiences awaiting you in the vibrant
          capital city of the UAE.
        </p>

        <p className="lg:text-3xl font-bold mt-5">
          Authorized Reseller Partner for
        </p>
        <div className="hidden lg:flex z-10   items-center justify-center lg:justify-start flex-wrap gap-5 lg:gap-7 mt-10">
          <Image src="/activities/ll1.png" height={68} width={161} />
          <Image src="/activities/ll2.png" height={79} width={159} />
          <Image src="/activities/mg.png" height={68} width={191} />
          <Image src="/activities/realMadrid.png" height={74} width={137} />
        </div>
        <div className="hidden lg:flex z-10   items-center justify-center lg:justify-start flex-wrap gap-5 lg:gap-10 mt-10">
          <Image src="/activities/ww.png" height={110} width={160} />
          <Image src="/activities/dp.png" height={92} width={136} />
          <Image src="/activities/burj.png" height={115} width={120} />
          <Image src="/activities/greenPlanet.png" height={67} width={215} />
        </div>
        <div className="lg:hidden flex items-center justify-center lg:justify-start flex-wrap gap-5 lg:gap-10 mt-10">
          <Image src="/activities/ll1.png" height={68} width={161} />
          <Image src="/activities/ll2.png" height={79} width={159} />
          <Image src="/activities/mg.png" height={68} width={191} />
          <Image src="/activities/realMadrid.png" height={74} width={137} />
          <Image src="/activities/ww.png" height={110} width={160} />
          <Image src="/activities/dp.png" height={92} width={136} />
          <Image src="/activities/burj.png" height={115} width={120} />
          <Image src="/activities/greenPlanet.png" height={67} width={215} />
        </div>
        <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5 lg:gap-10 mt-10">
          <div className="flex flex-wrap lg:mt-5">
            <a
              href="/activities"
              className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
            >
              Talk To us for Great deals
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0">
          <div className="relative">
            <Waypoint onEnter={handleVideoPress} onLeave={handleVideoPress}>
              <video
                controls
                muted
                src={"/dubai.mp4"}
                className="h-[650px] w-full rounded-3xl"
                onClick={handleVideoPress}
                loop
                ref={videoRef}
              />
            </Waypoint>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
