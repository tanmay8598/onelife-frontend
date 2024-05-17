import React from "react";
import Image from "next/image";

const HolidaySection3 = () => {
  return (
    <div>
      <section className="lg:h-full bg-holiday-bg bg-cover bg-top bg-no-repeat">
        <div className="flex relative flex-col  mx-auto max-w-screen-2xl  pt-32 sm:px-6 lg:flex  lg:mt-20 ">
          {/* heading  */}
          <div>
            <p className="text-orange font-pacifico lg:text-3xl text-center">
              Exclusive
            </p>
            <p className="font-bold text-2xl lg:text-4xl text-center">
              Packages
            </p>
          </div>
          {/* center  */}
          <div className="grid grid-cols-1 px-3  lg:px-0 lg:grid-cols-3 gap-5 lg:gap-10 w-full place-items-center mt-14 lg:mt-28">
            {/* card  1*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/azerbaijan.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5">
                4 nights & 5 days in Azerbaijan
              </p>
              <div className="flex items-center  justify-between mt-4 ">
                <p className="text-base text-gray-50">
                  4 start hotel | Transfer | Breakfast
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 2500</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/4-nights-5-days-in-azerbaijan/"
                    className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                  >
                    Know More
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
            {/* card  2*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/bali.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5">
                4 Nights & 5 Days in Bali
              </p>
              <div className="flex items-center  justify-between mt-4 ">
                <p className="text-base text-gray-50">
                  4 start hotel | Transfer
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 1090</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/5-days-4-nights-bali-package/"
                    className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                  >
                    Know More
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
            {/* card  3*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/austria.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5 leading-none">
                Austria, Hungary, Slovakia, Czech & Germany
              </p>
              <div className="flex items-center  justify-between mt-1">
                <p className="text-base text-gray-50">
                  4 start hotel | Transfer
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 5000</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/austria-hungary-slovakia-czech--germany-tour/"
                    className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                  >
                    Know More
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
        </div>
      </section>
      <section className="lg:h-full bg-bgSkin ">
        <div className="flex relative flex-col  mx-auto max-w-screen-2xl pt-10 sm:px-6 lg:flex">
          {/* center  */}
          <div className="grid grid-cols-1 px-3  lg:px-0 lg:grid-cols-3 gap-5 lg:gap-10 w-full place-items-center">
            {/* card  4*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/kryg.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5">
                4 Days & 5 Nights at Kyrgyzstan
              </p>
              <div className="flex items-center  justify-between mt-4 ">
                <p className="text-base text-gray-50">
                  Package includes 2 Adults 2 Kids (4-10 yrs)
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 4800</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/4-nights-5-days-in-kyrgyzstan/"
                    className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                  >
                    Know More
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
            {/* card  5*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/london.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5 ">
                London Package 7 nights & 8 days
              </p>
              <div className="flex items-center  justify-between mt-4">
                <p className="text-base text-gray-50 leading-none">
                  3 Adults | 4 Star Hotel | One day with river cruise
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 8500</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/7-nights-8-days-london-package/"
                    className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                  >
                    Know More
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
            {/* card  6*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/maldives.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5 leading-none">
                Sheraton Maldives Full Moon Resort & Spa
              </p>
              <div className="flex items-center  justify-between mt-1">
                <p className="text-base text-gray-50 leading-none">
                  3 Adults | 4 Star Hotel | One day with river cruise
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 690</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/4-star-hotel-stay---sheraton-maldives-full-moon-resort--spa/"
                    className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                  >
                    Know More
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
        </div>
      </section>
      <section className="lg:h-full bg-bgSkin ">
        <div className="flex relative flex-col  mx-auto max-w-screen-2xl pt-10 pb-32 sm:px-6 lg:flex">
          {/* center  */}
          <div className="grid grid-cols-1 px-3  lg:px-0 lg:grid-cols-3 gap-5 lg:gap-10 w-full place-items-center">
            {/* card  7*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/russia.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5">
                4 Night / 5 Days in Russia
              </p>
              <div className="flex items-center  justify-between mt-4 ">
                <p className="text-base text-gray-50">
                  Private Car with driver | Breakfast Included
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 3300</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/4-night--5-days-in-russia/"
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
            {/* card  8*/}
            <div className="w-full h-full bg-white shadow-lg p-5">
              <div className="relative h-[300px]  w-full  cursor-pointer">
                <Image
                  src="/holiday/turkey.png"
                  alt="logo"
                  priority={true}
                  fill={true}
                />
              </div>
              <p className="font-bold text-xl mt-5">
                8 DAYS AMAZING TURKEY TOUR
              </p>
              <div className="flex items-center  justify-between mt-3">
                <p className="text-base text-gray-50 leading-none">
                  Guaranteed Friday Departure | 4/5 Star Hotel
                </p>
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
                  <p className="font-bold text-lg text-orange">AED 4500</p>
                  <p className="text-[10px]">Tax Incl/pers</p>
                </div>
                <div className="w-auto">
                  <a
                    href="https://onelifetourism.com/blog/8-days-amazing-turkey-tour/"
                    className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange p-2 text-[14px] font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
                  >
                    Know More
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

            {/* text card */}
            <div className="mt-10 lg:mt-0 w-full flex flex-col text-center">
              <p className="font-semibold lg:text-2xl lg:w-[40%] mx-auto">
                Great Deals & Discounts Awaits
              </p>
              <p className="font-semibold text-[12px] mt-2 lg:text-lg lg:mt-5 w-[50%] mx-auto">
                Talk To Us To Know More
              </p>
              <div className="lg:mt-3 mx-auto">
                <a
                  href="/contact-us"
                  className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-6 lg:px-12 py-1 lg:py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
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
      </section>
    </div>
  );
};

export default HolidaySection3;
