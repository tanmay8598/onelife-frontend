import React from "react";
import Image from "next/image";

const HolidaySection2 = () => {
  return (
    <section className="bg-white">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl  py-10 sm:px-6 lg:flex lg:h-full  lg:mb-40 lg:mt-40 ">
        {/* heading  */}
        <div>
          <p className="text-orange font-pacifico lg:text-3xl text-center">
            Choose Your
          </p>
          <p className="font-bold text-2xl lg:text-4xl text-center">
            Perfect Holiday
          </p>
        </div>
        {/* cards  */}

        <div className="grid grid-cols-2 px-3 lg:px-0 lg:grid-cols-4 gap-2 lg:gap-5 w-full place-items-center mt-14 lg:mt-28">
          <div className="w-full">
            <div className="relative bg-holiday-dubai h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5 ">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-holiday-baku h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-holiday-malaysia h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-holiday-germany h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-holiday-india h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-holiday-switzerland h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-holiday-japan h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          {/* text card */}
          <div className="w-full flex flex-col text-center">
            <p className="font-semibold lg:text-2xl">
              Holidays Packages in 15+ Countries
            </p>
            <p className="font-semibold text-[12px] mt-2 lg:text-lg lg:mt-5 w-3/4 mx-auto">
              Talk To Us For More Countries
            </p>
            <div className="lg:mt-3 mx-auto">
              <a
                href="/contact-us"
                className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-6 lg:px-12 py-1 lg:py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
              >
                Talk To Us For More Packages
                <Image src="/arrow.png" height={9} width={8} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidaySection2;
