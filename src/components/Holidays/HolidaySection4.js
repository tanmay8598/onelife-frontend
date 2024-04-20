import React from "react";
import Image from "next/image";

const HolidaySection4 = () => {
  return (
    <section className="bg-white flex relative flex-col  mx-auto max-w-screen-2xl   sm:px-6 lg:mb-32">
      {/* bottom  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 w-full place-items-center text-center lg:text-start">
        <div className="w-full">
          <div>
            <p className="font-medium text-2xl lg:text-4xl ">Clients</p>
            <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0 " />
            <p className="font-medium text-5xl lg:text-[70px] mt-5 lg:mt-28">
              7500+
            </p>
            <p className="mt-10">
              Our track record speaks for itself - a vast clientele places their
              trust in us for their application processing needs.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <p className="font-medium text-2xl lg:text-4xl">Destinations</p>
            <div className="h-[1px]  bg-black mt-5 w-[80%] mx-auto lg:mx-0" />
            <p className="font-medium text-5xl lg:text-[70px] mt-5 lg:mt-28">
              40+
            </p>
            <p className="mt-10 lg:w-3/4">
              Our comprehensive visa consultancy services extend to over 40
              countries worldwide.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <p className="font-medium text-2xl lg:text-4xl ">Happiness</p>
            <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0" />

            <Image
              src="/activity/infinity.png"
              height={100}
              width={100}
              className="mt-2 lg:mt-20"
            />

            <p className="mt-0">
              From exhilarating desert safaris to mesmerizing dhow cruises along
              the Dubai Creek, every moment is crafted to bring smiles and
              unforgettable memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidaySection4;
