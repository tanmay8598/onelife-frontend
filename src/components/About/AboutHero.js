"use client";
import React from "react";
import Image from "next/image";
import Typical from "react-typical";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="bg-bgLight">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:px-8 ">
        <p className="text-4xl mt-2 font-bold lg:text-7xl  lg:mt-[150px] leading-none">
          One Life Tourism is
        </p>
        <h1 class="animate-typing overflow-hidden whitespace-nowrap  pr-5 text-4xl lg:text-7xl  font-bold">
          <Typical
            steps={[
              "Visa Consultant",
              2000,
              "Reliable",
              3000,
              "Travel Guide",
              3000,
              "Professional",
              3000,
              "Travel Agency",
              3000,
              "Awesome",
              3000,
              "Travel Partner",
              3000,
              "Experienced",
              3000,
            ]}
            wrapper="p"
            loop={Infinity}
          />
        </h1>
        {/* {content()} */}

        <Image
          src="/map.png"
          height={1000}
          width={1000}
          className="absolute object-contain hidden  lg:block lg:-top-44 lg:right-10"
        />
        <Link
          href="https://maps.app.goo.gl/kXUh3eeHKDHZ4eqj7"
          className="relative h-[52px]  w-[220px]  cursor-pointer mt-10 lg:mt-20"
        >
          <Image
            src="/icons/clutch.png"
            alt="logo"
            priority={true}
            fill={true}
          />
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
