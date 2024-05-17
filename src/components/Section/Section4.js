import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section4 = () => {
  return (
    <section className="relative flex lg:h-screen bg-landing-bg bg-cover bg-center bg-no-repeat lg:mb-[200px]">
      <div className="flex flex-col relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8">
        <div className="w-full text-center">
          <p className="text-orange text-xl lg:text-[30px] font-pacifico">
            Traveler’s
          </p>
          <h1 className="text-3xl font-bold lg:text-[40px] lg:mt-5 text-black">
            Review & Gallery
          </h1>
        </div>

        <div className="lg:flex items-start  mt-10 lg:mt-20">
          {/* left  */}
          <div>
            <div className="text-center lg:text-left">
              <p className="font-bold text-2xl lg:text-[50px]">1000+</p>
              <p className="font-medium text-xl lg:text-4xl">Happy travelers</p>
            </div>

            <div className="mt-10">
              {/* review card  */}
              <div className="flex gap-5">
                <Image src="/icons/review1.png" height={80} width={80} />
                <div>
                  <p className=" text-sm lg:text-md lg:w-3/4 text-left">
                    It was overall a great experience with One Life. We had a
                    well arranged and smooth trip to Dubai with the help of
                    their team. They were responding timely and were very
                    professional and experienced. Kudos to them. Highly
                    recommended!!
                  </p>
                  <div className="mt-2">
                    <p className="text-xl ">Shweta Vatyani</p>
                    <div className="flex  items-center">
                      <p className="text-sm lg:text-md">as reviewed on</p>
                      <Link href="https://maps.app.goo.gl/kXUh3eeHKDHZ4eqj7">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                          className="h-4 w-auto mt-2 ml-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image src="/icons/review2.png" height={80} width={80} />
                <div>
                  <p className=" text-sm lg:text-md lg:w-3/4 text-left">
                    I dealt with Priyanshu who helped me obtain a visa for my
                    nanny to go to Cyprus. It was complicated by the Tadbeer
                    system. Glad I used a professional to help me. Would have
                    been much more difficult. Absolutely worth the money and I
                    would recommend people use their services. Service fantastic
                    from start to finish. Thank you Priyanshu!
                  </p>
                  <div className="mt-2">
                    <p className="text-xl">Colin Lynam</p>
                    <div className="flex  items-center">
                      <p className="text-sm lg:text-md">as reviewed on</p>
                      <Link href="https://maps.app.goo.gl/kXUh3eeHKDHZ4eqj7">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                          className="h-4 w-auto mt-2 ml-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right desktop */}
          <div className="mx-auto mt-5 lg:mt-0 grid grid-cols-3 gap-3   place-items-center">
            <img className="hover:opacity-75 w-full" src="/gallery/g1.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g2.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g3.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g4.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g5.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g6.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g7.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g8.png" />
            <img className="hover:opacity-75 w-full" src="/gallery/g9.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
