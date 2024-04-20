import React from "react";
import Image from "next/image";

const HolidaySection3 = () => {
  return (
    <section className="lg:h-full bg-holiday-bg bg-cover bg-top bg-no-repeat">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl  py-32 sm:px-6 lg:flex lg:mb-40 lg:mt-20 ">
        {/* heading  */}
        <div>
          <p className="text-orange font-pacifico lg:text-3xl text-center">
            Choose Your
          </p>
          <p className="font-bold text-2xl lg:text-4xl text-center">
            Perfect Holiday
          </p>
        </div>
        {/* center  */}
        <div className="grid grid-cols-1 px-3  lg:px-0 lg:grid-cols-3 gap-2 lg:gap-10 w-full place-items-center mt-14 lg:mt-28">
          {/* card  */}
          <div className="w-full h-full bg-white shadow-lg p-5">
            <div className="relative h-[300px]  w-full  cursor-pointer">
              <Image
                src="/holiday/agra.png"
                alt="logo"
                priority={true}
                fill={true}
              />
            </div>
            <p className="font-bold text-xl mt-5">
              Heritage, And Vibrant India
            </p>
            <div className="flex items-center  justify-between mt-5 ">
              <p className="text-sm">Delhi</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Agra</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Varanasi</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Goa</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Mumbai</p>
            </div>
            <div className="relative h-[1px]  w-full  cursor-pointer mt-3">
              <Image
                src="/holiday/line.png"
                alt="logo"
                priority={true}
                fill={true}
              />
            </div>
            {/* CTA  */}
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-[10px]">Starting from</p>
                <p className="font-bold text-lg text-orange">AED 1520</p>
                <p className="text-[10px]">Tax Incl/pers</p>
              </div>
              <div className="w-auto">
                <a
                  href="/contact-us"
                  className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                >
                  Talk To Us
                  <Image
                    src="/arrow.png"
                    height={9}
                    width={8}
                    className="ml-1"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* card  */}
          <div className="w-full h-full bg-white shadow-lg p-5">
            <div className="relative h-[300px]  w-full  cursor-pointer">
              <Image
                src="/holiday/greece.png"
                alt="logo"
                priority={true}
                fill={true}
              />
            </div>
            <p className="font-bold text-xl mt-5">Historical Greece</p>
            <div className="flex items-center  justify-between mt-5 ">
              <p className="text-sm">Delhi</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Agra</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Varanasi</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Goa</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Mumbai</p>
            </div>
            <div className="relative h-[1px]  w-full  cursor-pointer mt-3">
              <Image
                src="/holiday/line.png"
                alt="logo"
                priority={true}
                fill={true}
              />
            </div>
            {/* CTA  */}
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-[10px]">Starting from</p>
                <p className="font-bold text-lg text-orange">AED 1520</p>
                <p className="text-[10px]">Tax Incl/pers</p>
              </div>
              <div className="w-auto">
                <a
                  href="/contact-us"
                  className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                >
                  Talk To Us
                  <Image
                    src="/arrow.png"
                    height={9}
                    width={8}
                    className="ml-1"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* card  */}
          <div className="w-full h-full bg-white shadow-lg p-5">
            <div className="relative h-[300px]  w-full  cursor-pointer">
              <Image
                src="/holiday/srilanka.png"
                alt="logo"
                priority={true}
                fill={true}
              />
            </div>
            <p className="font-bold text-xl mt-5">Natural Sri Lanka</p>
            <div className="flex items-center  justify-between mt-5 ">
              <p className="text-sm">Delhi</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Agra</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Varanasi</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Goa</p>
              <Image
                src="/holiday/right-arrow.png"
                height={12}
                width={12}
                alt="arrow"
              />
              <p className="text-sm">Mumbai</p>
            </div>
            <div className="relative h-[1px]  w-full  cursor-pointer mt-3">
              <Image
                src="/holiday/line.png"
                alt="logo"
                priority={true}
                fill={true}
              />
            </div>
            {/* CTA  */}
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-[10px]">Starting from</p>
                <p className="font-bold text-lg text-orange">AED 1520</p>
                <p className="text-[10px]">Tax Incl/pers</p>
              </div>
              <div className="w-auto">
                <a
                  href="#"
                  className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                >
                  Talk To Us
                  <Image
                    src="/arrow.png"
                    height={9}
                    width={8}
                    className="ml-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* button  */}
        <div className="w-auto lg:mt-20 mx-auto">
          <a
            href="/contact-us"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
          >
            More Curated Packages for You
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HolidaySection3;
