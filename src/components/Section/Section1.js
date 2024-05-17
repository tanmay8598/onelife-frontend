import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section1 = () => {
  return (
    <section className="bg-white">
      <div className="flex relative  flex-col  mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex h-full lg:px-8 lg:mt-20">
        <p className="text-orange font-pacifico lg:text-[36px]">
          Travel With Ease
        </p>

        <p className="text-3xl mt-2 font-extrabold lg:text-[50px] lg:w-[70%] lg:mt-[30px] leading-none">
          One Stop Solution for all your Travel Needs
        </p>

        <p className="text-sm mt-5 text-justify lg:w-[65%] lg:text-lg">
          We pride ourselves on offering a comprehensive range of services
          tailored to meet every traveler's needs. From expert visa consultation
          services ensuring hassle-free travel arrangements to organizing
          thrilling and memorable activities at destinations worldwide, we are
          dedicated to crafting unforgettable experiences for our clients.
          Whether you're seeking adventure-packed holiday packages or tranquil
          getaways, our team is committed to curating the perfect itinerary just
          for you. Additionally, we cater to the B2B segment, providing tailored
          solutions for businesses seeking seamless travel arrangements for
          their employees or clients. With our expertise, dedication, and
          commitment to excellence, we're here to make your travel dreams a
          reality.
        </p>

        <Image
          src="/map.png"
          height={1000}
          width={1000}
          className="absolute object-contain hidden lg:block lg:-top-64 right-0"
        />
        {/* <div className="mt-5 lg:mt-8 flex  lg:flex-wrap items-end gap-2 lg:gap-10">
          <div className="mt-2">
            <p className="text-orange text-2xl lg:text-[40px] font-semibold">
              20+
            </p>
            <p className="text-sm lg:text-lg lg:w-[209px] lg:mt-5">
              Years of Collaborative Industry Experience
            </p>
          </div>
          <div className="mt-2">
            <p className="text-orange text-2xl lg:text-[40px] font-semibold">
              50K +
            </p>
            <p className="text-sm lg:text-lg  lg:w-[209px] lg:mt-5">
              Customers and business served
            </p>
          </div>

          
          <div className="hidden lg:block">
            <a
              href="#"
              className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
            >
              Enquire Now
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          <a
            href="#"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
          >
            Enquire Now
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div> */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 w-full  place-items-start text-center lg:text-start">
          <div className="w-full">
            <div>
              <p className="font-medium text-2xl lg:text-4xl ">Clients</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0 " />
              <p className="font-medium text-4xl lg:text-[70px] mt-2 lg:mt-28">
                7500+
              </p>
              <p className="mt-10">
                Our track record speaks for itself - a vast clientele places
                their trust in us for their application processing needs.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <p className="font-medium text-2xl lg:text-4xl ">Destinations</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%] mx-auto lg:mx-0" />
              <p className="font-medium text-4xl lg:text-[70px] mt-2 lg:mt-28">
                40+
              </p>
              <p className="mt-10 ">
                Our comprehensive visa consultancy services extend to over 40
                countries worldwide.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <p className="font-medium text-2xl lg:text-4xl ">Success</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0" />
              <p className="font-medium text-4xl lg:text-[70px] mt-2 lg:mt-28">
                95%
              </p>
              <p className="mt-10 ">
                With a remarkable 95% success rate in application processing, we
                stand as a testament to our dedication and expertise in the
                field.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[200px] lg:mt-20">
          <a
            href="/contact-us/"
            className="text-center w-auto tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  no-underline text-black lg:text-md "
          >
            Talk To Us
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>
        {/* bottom cards */}

        <div className="flex flex-wrap gap-5 mt-10 lg:mt-[100px] ">
          <Link
            href="/visa"
            className="no-underline relative flex flex-col justify-center w-full bg-uae-visa  h-[100px]  px-5 lg:py-20   lg:w-[383px] bg-cover bg-no-repeat rounded-lg text-white p-1 text-center lg:text-left opacity-90 hover:opacity-100 "
          >
            <p className="text-lg lg:text-2xl font-semibold">
              Visa Consultation
            </p>
            <p className="font-semibold text-[14px] lg:w-[275px]">
              Consultation for 40+ countries. Trusted by 8k+ travellers
            </p>
          </Link>
          <Link
            href="/activities"
            className="no-underline flex flex-col justify-center w-full bg-uae-activities h-[100px]  px-5 lg:py-20   lg:w-[383px] bg-cover bg-no-repeat rounded-lg text-white p-1 text-center lg:text-left opacity-90 hover:opacity-100"
          >
            <p className="text-lg lg:text-2xl font-semibold">Activities</p>
            <p className="font-semibold text-[14px] lg:w-[275px]">
              Uncover amazing adventures with top deals and save big!
            </p>
          </Link>
          <Link
            href="/holidays"
            className="no-underline flex flex-col justify-center w-full bg-uae-holidays h-[100px]  px-5 lg:py-20   lg:w-[383px] bg-cover bg-no-repeat rounded-lg text-white p-1 text-center lg:text-left opacity-90 hover:opacity-100"
          >
            <p className="text-lg lg:text-2xl font-semibold">Holidays</p>
            <p className="font-semibold text-[14px] lg:w-[275px]">
              Craft an extraordinary travel wishlist with our curated packages.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
