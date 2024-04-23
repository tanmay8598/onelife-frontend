import Image from "next/image";
import React from "react";

const Section5 = () => {
  return (
    <section className="relative flex lg:h-full bg-home-bg1-mobile lg:bg-home-bg1 bg-cover bg-center bg-no-repeat lg:mt-20">
      {/* <div className="absolute lg:hidden inset-0  bg-black/60"></div> */}
      <div className="flex flex-col relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex  lg:px-8">
        {/* heading  */}
        <div>
          <p className="text-orange text-xl lg:text-[30px] font-pacifico">
            Business Travel Solutions
          </p>
          <h1 className="text-3xl font-bold lg:text-[40px] lg:mt-5 text-white lg:w-3/4 leading-10 lg:leading-[50px]">
            Need Travel Solutions for your business? Better rely on
            professionals!
          </h1>

          <p className="text-white mt-5 lg:mt-8 lg:w-[55%] lg:text-lg">
            We specialize in offering comprehensive travel solutions tailored
            specifically for businesses. Whether it's arranging visas, booking
            accommodations, or coordinating transportation, we are committed to
            delivering efficient and reliable services that cater to the unique
            requirements of our corporate clientele.
          </p>
        </div>

        <div className="text-white lg:w-3/4 grid grid-cols-1 px-10 lg:px-0  lg:grid-cols-3 gap-8 lg:gap-10 w-full place-items-center mt-10 lg:mt-15">
          <div className="w-full">
            <div className=" flex flex-col items-center lg:items-start">
              <Image src="/home/icons/bts1.png" height={70} width={70} />

              <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                Top Rated by Businesses
              </p>

              <p className="mt-3 text-sm text-center lg:text-left">
                Businesses rely on us as their trusted travel partner,
                consistently rating our services highly.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className=" flex flex-col  items-center lg:items-start">
              <Image src="/home/icons/bts2.png" height={70} width={70} />

              <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                Urgent Solutions
              </p>

              <p className="mt-3 text-sm text-center lg:text-left">
                Our dedicated team is equipped to handle last-minute bookings,
                expedited visa processing, and swift arrangements for
                accommodations and transportation.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className=" flex flex-col  items-center lg:items-start">
              <Image src="/home/icons/bts3.png" height={70} width={70} />

              <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                End-to-End Solution
              </p>

              <p className="mt-3 text-sm text-center lg:text-left">
                From diverse tour packages to exciting activities and
                accommodations, we offer a wide array of options to tailor your
                UAE travel to your preferences and desires.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex mt-8 lg:mt-12 items-center">
          <div>
            <a
              href="/contact-us/"
              className="text-center w-auto tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  no-underline text-black lg:text-md "
            >
              Inquire Now
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
          <div className="lg:ml-10">
            <a
              href="/b2b"
              className="text-center w-auto tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  no-underline text-black lg:text-md "
            >
              Know More
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
