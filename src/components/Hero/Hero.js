"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return "bg-bg-img-1 transition duration-500 ";
      case 2:
        return "bg-bg-img-2 transition duration-500";
      case 3:
        return "bg-bg-img-3 transition duration-500";
      case 4:
        return "bg-bg-img-4 transition duration-500";
      default:
        return "bg-bg-img-1 transition duration-500";
    }
  };

  return (
    <section
      className={`relative lg:h-[870px] ${returnPhotoURL()} bg-cover bg-center bg-no-repeat ease-in-out`}
    >
      {/* <div className="absolute inset-0  bg-black/20"></div> */}

      <div className="flex flex-col relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen/2 lg:items-center lg:px-8">
        <div className="w-full text-center">
          <p className="text-white text-lg lg:text-[40px] font-pacifico">
            One Life
          </p>
          <h1 className="text-3xl font-extrabold lg:text-[70px] lg:mt-10 text-white uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
            Endless Adventures
          </h1>

          <p className="mt-2  text-sm text-white lg:mt-7  font-bold lg:text-xl drop-shadow-lg">
            #1 Travel Agency in Dubai. Rated by 100+ satisfied travelers. 👍
          </p>

          <div className="mt-6 lg:mt-8 flex items-center justify-center gap-4 text-center">
            <a
              href="/contact-us"
              className="tracking-wide border-2 border-black border-solid block  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md hover:"
            >
              Contact Us{" "}
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
        </div>

        {/* card  */}

        {/* <div className="flexBetween mt-10 lg:mt-20 text-white">
          <div className="flex flex-col items-center justify-center text-center ">
            <Image
              src="/like.png"
              width={2000}
              height={2000}
              className="h-8 w-8 lg:h-[50px] lg:w-[50px]"
            />
            <p className="font-semibold text-sm lg:text-2xl mt-2 lg:mt-3">
              Trusted By Many
            </p>
            <p className="hidden lg:block mt-2 lg:mt-3 ">
              With more than 100 5 star reviews in last 6 months and our
              extensive experience, we have earned the trust of many as their
              go-to travel partners.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center ">
            <Image
              src="/hotdeal.png"
              width={2000}
              height={2000}
              className="h-8 w-8 lg:h-[50px] lg:w-[50px]"
            />
            <p className="font-semibold text-sm lg:text-2xl mt-2 lg:mt-3">
              Great deals
            </p>
            <p className="hidden lg:block mt-2 lg:mt-3 ">
              With our extensive network and expertise, we secure the best
              offers and pass on the savings to you.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center ">
            <Image
              src="/hotballon.png"
              width={2000}
              height={2000}
              className="h-8 w-8 lg:h-[50px] lg:w-[50px]"
            />
            <p className="font-semibold text-sm lg:text-2xl mt-2 lg:mt-3">
              Wide range of options
            </p>
            <p className="hidden lg:block mt-2 lg:mt-3 ">
              From diverse tour packages to exciting activities and
              accommodations, we offer a wide array of options to tailor your
              UAE travel to your preferences and desires.
            </p>
          </div>
        </div> */}
        <div className="grid grid-cols-3 gap-16 text-white mt-10 lg:mt-20 place-items-start">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <Image
              src="/like.png"
              width={2000}
              height={2000}
              className="h-8 w-8 lg:h-[50px] lg:w-[50px]"
            />
            <p className="font-semibold text-sm lg:text-2xl mt-2 lg:mt-3">
              Trusted By Many
            </p>
            <p className="hidden lg:block mt-2 lg:mt-3 ">
              With more than 100 5 star reviews in last 6 months and our
              extensive experience, we have earned the trust of many as their
              go-to travel partners.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center text-center">
            <Image
              src="/hotdeal.png"
              width={2000}
              height={2000}
              className="h-8 w-8 lg:h-[50px] lg:w-[50px]"
            />
            <p className="font-semibold text-sm lg:text-2xl mt-2 lg:mt-3">
              Great deals
            </p>
            <p className="hidden lg:block mt-2 lg:mt-3 ">
              With our extensive network and expertise, we secure the best
              offers and pass on the savings to you.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center text-center">
            <Image
              src="/hotballon.png"
              width={2000}
              height={2000}
              className="h-8 w-8 lg:h-[50px] lg:w-[50px]"
            />
            <p className="font-semibold text-sm lg:text-2xl mt-2 lg:mt-3">
              Wide range of options
            </p>
            <p className="hidden lg:block mt-2 lg:mt-3 ">
              From diverse tour packages to exciting activities and
              accommodations, we offer a wide array of options to tailor your
              UAE travel to your preferences and desires.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/overlay1.png"
        height={125}
        width={2000}
        className="absolute bottom-0 w-full"
      />
    </section>
  );
};

export default Hero;
