import React from "react";
import Image from "next/image";

const VisaSection1 = () => {
  return (
    <section className="bg-white">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl  py-10 sm:px-6 lg:flex lg:h-full  lg:mb-40 lg:mt-40 ">
        <p className="font-medium text-2xl lg:text-5xl text-center">
          Why Choose Us as your Visa Partner?
        </p>
        <div className="grid grid-cols-1 px-10 lg:px-0  lg:grid-cols-3 gap-8 lg:gap-20 w-full place-items-center mt-14 lg:mt-28">
          <div className="w-full">
            <div className=" flex flex-col items-center">
              <Image src="/visa/section1-1.png" height={100} width={100} />

              <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                Experts & Professionals
              </p>

              <p className="mt-5 text-sm text-center">
                We pride ourselve s on our team of dedicated experts and
                professionals who are committed to processing your application
                efficiently and accurately.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className=" flex flex-col items-center">
              <Image src="/visa/section1-2.png" height={100} width={100} />

              <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                Personalized Service
              </p>

              <p className="mt-5 text-sm text-center">
                From start to finish, our team will guide you through the
                process, addressing any concerns and ensuring all necessary
                documentation is completed to the highest standard.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className=" flex flex-col items-center">
              <Image src="/visa/section1-3.png" height={100} width={100} />

              <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                Trusted By Many
              </p>

              <p className="mt-5 text-sm text-center">
                With more than 100+ 5-star reviews, 500+ application processes
                and our extensive experience, we have earned the trust of many
                as their go-to travel partners.
              </p>
            </div>
          </div>
        </div>

        {/* button  */}
        <div className="w-[280px] lg:mt-20 mx-auto">
          <a
            href="/contact-us"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
          >
            Contact Now To Apply
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>
        {/* bottom  */}
        <div className="mt-20 lg:mt-[200px] grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 w-full place-items-start text-center lg:text-start">
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

        {/* cards  */}

        <div className="grid grid-cols-2 px-3 lg:px-0 lg:grid-cols-4 gap-2 lg:gap-5 w-full place-items-center mt-14 lg:mt-28">
          <div className="w-full">
            <div className="relative bg-visa-schengen h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-usa h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-uk h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-ca h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-eg h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-au h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-tu h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          {/* text card */}
          <div className="w-full flex flex-col text-center">
            <p className="font-semibold lg:text-2xl">
              We provide visa consultancy for 40+ Countries
            </p>
            <p className="font-semibold text-[12px] mt-2 lg:text-lg lg:mt-5 w-3/4 mx-auto">
              Talk To Us For More Countries
            </p>
            <div className="lg:mt-3 mx-auto">
              <a
                href="/contact-us"
                className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-6 lg:px-12 py-1 lg:py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
              >
                Talk To Us
                <Image src="/arrow.png" height={9} width={8} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection1;
