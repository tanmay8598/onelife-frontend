"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import apiClient from "@/api/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const link =
  "https://www.google.com/maps/place/Al+Khaleej+Center/@25.2578173,55.294199,17.47z/data=!4m6!3m5!1s0x3e5f433c5aa7287d:0x460b315b0d606c13!8m2!3d25.257195!4d55.2957318!16s%2Fg%2F11b7hd_871?entry=tts";

const Footer = () => {
  const [getList, setGetList] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const fetchBlogs = async () => {
    const { data } = await apiClient.get("/blog", {
      pageNumber: currentPageNo,
    });

    setPageCount(data.pageCount);
    setGetList(data.blogs.slice(0, 3));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await apiClient.post("/form/create-email", {
      email,
    });
    if (result.ok) {
      toast.success("Hurray, Email submitted!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setEmail("");
    } else {
      toast.error("Error. Retry", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <footer className="relative mt-10  lg:mt-[120px]">
      <ToastContainer />
      {pathname === "/blog/" || pathname === "/contact-us/" ? (
        <></>
      ) : (
        <>
          {/* blogs  */}
          <div className=" max-w-screen-2xl px-4 mx-auto mt-5 lg:mt-0">
            {/* desktop  */}
            <div className="hidden  lg:grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-20  place-items-center">
              {getList?.map((blog) => {
                return (
                  <Link
                    className="w-full text-black no-underline"
                    href={`/blog/${blog?.slug}`}
                    key={blog?._id}
                  >
                    {/* image  */}
                    <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
                      <Image
                        src={blog?.image}
                        alt="blog"
                        priority={true}
                        fill={true}
                      />
                    </div>

                    <p className="text-sm lg:text-base mt-2">{blog?.heading}</p>

                    <p className="font-semibold text-sm lg:text-base mt-2">
                      Read Full Blog
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* mobile  */}
            <div className="flex overflow-x-auto lg:hidden space-x-8">
              {getList?.map((blog) => {
                return (
                  <Link
                    className="flex-shrink-0 w-3/4 text-black no-underline"
                    href={`/blog/${blog?.slug}`}
                    key={blog?._id}
                  >
                    {/* image  */}
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={blog?.image}
                        alt="blog"
                        priority={true}
                        fill={true}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>

                    <p className="text-sm lg:text-base ">{blog?.heading}</p>

                    <p className="font-semibold text-sm lg:text-base mt-2">
                      Read Full Blog
                    </p>
                  </Link>
                );
              })}
            </div>
            {/* button  */}
            <div className="w-[220px] lg:mt-10">
              <a
                href="/blog"
                className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
              >
                Read All Blogs
                <Image src="/arrow.png" height={9} width={8} className="ml-1" />
              </a>
            </div>
          </div>
        </>
      )}

      {pathname !== "/contact-us/" && (
        <>
          {/* top */}
          <div className="flex flex-col w-full relative mx-auto   max-w-screen-2xl px-4 mt-10 lg:mt-20">
            <p className="font-semibold text-2xl lg:text-6xl">
              Best travel agency,
            </p>
            <p className="font-semibold text-2xl lg:text-6xl">
              located in the heart of Dubai
            </p>
            <p className="text-sm lg:text-lg lg:mt-2">
              Al Khaleej Center - 7th Floor, Office# 714 - Al Mankhool Rd -
              Bur Dubai, Dubai |
              <a
                target="_blank"
                className="text-orange ml-2 underline font-semibold"
                href="https://maps.app.goo.gl/jyJqmqFSRtHWFfs36"
              >
                Locate US On Map
              </a>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.40115827738!2d55.2954873!3d25.257087299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432be4ecef23%3A0x651a12c9b4fa47ea!2sOne%20Life%20Tourism!5e0!3m2!1sen!2sin!4v1715855473710!5m2!1sen!2sin"
              width="full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="lg:mt-10 mt-5"
            ></iframe>
            {/* <a
          href="#"
          className="relative h-[200px] w-full lg:h-[265px]  lg:w-[1171px]  cursor-pointer mt-2 lg:mt-10"
        >
          <Image
            src="/section/footer-map.png"
            alt="map"
            priority={true}
            fill={true}
            objectFit="contain"
          />
        </a> */}
          </div>

          <div className="flex flex-col w-full mt-10 relative mx-auto  max-w-screen-lg px-4  lg:py-32 sm:px-6 lg:flex lg:h-screen/2 lg:items-center lg:px-8">
            {/* center  */}
            <div className="lg:flex  items-center justify-between w-full text-center">
              <div>
                <p className="lg:text-xl">Social Network</p>
                <p className="font-pacifico text-orange text-xl lg:text-3xl">
                  Let’s Be Friend
                </p>
                <div className="mt-2 lg:mt-7 w-full flex gap-6 items-center justify-center">
                  <Link
                    href="https://www.facebook.com/onelifetourism"
                    target="_blank"
                  >
                    <Image src="/icons/fb.png" height={50} width={50} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/onelifetourism"
                    target="_blank"
                  >
                    <Image src="/icons/linkedin.png" height={50} width={50} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/one_life_tourism/"
                    target="_blank"
                  >
                    <Image src="/icons/ig.png" height={50} width={50} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCwdyYkY5eVkhNYAB6Imx3Xw"
                    target="_blank"
                  >
                    <Image src="/icons/yt.png" height={50} width={50} />
                  </Link>
                </div>
                <div className="flex mt-8 items-center justify-center">
                  <Image
                    src="/icons/call1.png"
                    height={48}
                    width={48}
                    className="h-7 w-7 lg:h-[42px] lg:w-[42px]"
                  />
                  <a
                    href="tel:+971547082256"
                    className="text-orange hover:text-black font-bold text-lg lg:text-[32px] lg:ml-2 no-underline"
                  >
                    (+971) 046 121 340
                  </a>
                </div>
              </div>
              <div className="hidden lg:block h-[330px] w-[1px] bg-gray-30" />
              <div className="mt-20 lg:mt-0">
                <p className="lg:text-xl">Newsletter</p>
                <p className="font-pacifico text-orange text-xl lg:text-3xl">
                  Be the first to know
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="block w-3/4 mx-auto lg:w-full  px-4 py-2 mt-5 text-gray-700 bg-transparent border-black rounded-[5px] placeholder-gray-20 lg:text-lg font-poppins"
                  />
                  {email?.length > 0 && (
                    <div className="w-full lg:mt-2 cursor-pointer">
                      <button className="w-full text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-4 py-1 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black ">
                        Subscribe
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/* bottom footer  */}
      <div className="flex flex-col items-center mt-10">
        <Image src="/logo.png" alt="logo" width={274} height={121} />

        <div className="flex gap-4 mt-10 ">
          <a className="font-darkBlue font-medium no-underline " href="/about">
            About
          </a>
          <a
            className="font-darkBlue font-medium no-underline"
            href="/contact-us"
          >
            Contact Us
          </a>
          <a
            className="font-darkBlue font-medium no-underline"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className="font-darkBlue font-medium no-underline"
            href="/terms-conditions"
          >
            Terms
          </a>
        </div>
      </div>

      <p className="font-semibold text-sm mt-7 text-center mb-10">
        Copyright © 2024 
        <strong className="text-red">onelifetourism.com.</strong> All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
