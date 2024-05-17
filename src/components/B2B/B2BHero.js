"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const B2BHero = () => {
  return (
    <section className="bg-b2b-bg bg-cover bg-center bg-no-repeat">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:px-8 ">
        <p className="text-4xl mt-2 font-bold lg:text-7xl  lg:mt-[150px] leading-none lg:w-[70%]">
          A Dynamic Ally For Your Business
        </p>

        <p className="font-bold text-xl lg:text-3xl lg:mt-5">
          Over
          <strong className="text-orange"> 50 </strong>Satisfied Businesses
        </p>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          <a
            href="#"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
          >
            Know More
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>

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

export default B2BHero;
