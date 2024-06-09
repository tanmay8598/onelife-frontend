"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scroll = window.scrollY;

    const shouldBeVisible = scroll <= 150;
    setIsVisible(shouldBeVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky  top-0 z-50 h-[100px]">
      <header className="w-full bg-bgLight ">
        {/* nav top */}
        <div
          className={`hidden bg-red h-[54px] top-0 z-10 transition-all  ease-in-out duration-200 ${
            isVisible ? "lg:block" : "hidden"
          }`}
        >
          {/* <div className="hidden lg:block bg-red h-[54px]"> */}
          <div className="lg:nav-max-container lg:flexBetween h-[50px] ">
            <div className="flexCenter ">
              <Image src="/mail.png" alt="logo" width={20} height={20} />
              <p className="text-sm font-regular text-white ml-2">
                info@onelifetourism.com
              </p>
            </div>
            <div className="flexCenter mt-2">
              <Link
                href="https://www.facebook.com/onelifetourism"
                target="_blank"
              >
                <Image src="/fb1.png" alt="logo" width={25} height={25} />
              </Link>
              <Link
                href="https://www.instagram.com/one_life_tourism/"
                target="_blank"
              >
                <Image
                  src="/ig.png"
                  alt="logo"
                  width={25}
                  height={25}
                  className="ml-2"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/onelifetourism"
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  alt="logo"
                  width={25}
                  height={25}
                  className="ml-2"
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCwdyYkY5eVkhNYAB6Imx3Xw"
                target="_blank"
              >
                <Image
                  src="/yt.png"
                  alt="logo"
                  width={25}
                  height={25}
                  className="ml-2 "
                />
              </Link>
            </div>
          </div>
        </div>
        {/* nav main  */}

        <nav className="flexBetween nav-max-container padding-container relative z-30 py-2 lg:py-5">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={172} height={76} />
          </Link>
          <ul className="hidden h-full gap-12 lg:flex ">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-lg font-semibold text-darkBlue flexCenter cursor-pointer  transition-all  no-underline"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="lg:flexCenter hidden">
            <Image src="/phone.svg" alt="logo" width={20} height={20} />
            <a
              href="tel:+971547082256"
              className="text-lg font-bold text-darkBlue hover:text-orange ml-2 no-underline"
            >
              (+971) 046-121-340
            </a>
          </div>
          <Image
            onClick={() => setIsOpen(!isOpen)}
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
          {/* mobile sidebar  */}
          <div
            className={
              isOpen
                ? "fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-bgLight ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            <ul className=" h-full gap-4 flex flex-col p-5 ">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={172} height={76} />
              </Link>

              {NAV_LINKS.map((link) => (
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  href={link.href}
                  key={link.key}
                  className="text-lg font-semibold text-darkBlue  cursor-pointer  transition-all py-2  no-underline border-0 border-b-[1px] border-solid border-gray-30"
                >
                  {link.label}
                </Link>
              ))}

              <div className="text-lg font-semibold flex items-center text-darkBlue hover:text-orange cursor-pointer  transition-all py-2  no-underline border-0 border-b-[1px] border-solid border-gray-30">
                <Image src="/phone.svg" alt="logo" width={20} height={20} />
                <a
                  href="tel:+971547082256"
                  className="text-lg text-darkBlue hover:text-orange  ml-2 no-underline"
                >
                  (+971) 54-708-2256
                </a>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
