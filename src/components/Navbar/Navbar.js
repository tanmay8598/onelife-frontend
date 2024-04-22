"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full bg-bgLight sticky top-0 z-50">
      {/* nav top */}
      <div className="hidden lg:block bg-red h-[54px]">
        <div className="lg:nav-max-container lg:flexBetween h-[54px] ">
          <div className="flexCenter">
            <Image src="/mail.png" alt="logo" width={20} height={20} />
            <p className="text-md font-regular text-white ml-2">
              info@onelifetourism.com
            </p>
          </div>
          <div className="flexCenter">
            <Image src="/fb1.png" alt="logo" width={25} height={25} />
            <Image
              src="/ig.png"
              alt="logo"
              width={25}
              height={25}
              className="ml-2"
            />
            <Image
              src="/linkedin.png"
              alt="logo"
              width={25}
              height={25}
              className="ml-2"
            />
            <Image
              src="/yt.png"
              alt="logo"
              width={25}
              height={25}
              className="ml-2 "
            />
          </div>
        </div>
      </div>
      {/* nav main  */}
      <nav className="flexBetween nav-max-container padding-container relative z-30 py-2 lg:py-5 ">
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
          <p className="text-lg font-bold text-black ml-2">
            (+971) 541 -265 -234
          </p>
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
              ? "fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-white  ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <ul className=" h-full gap-4 flex flex-col p-5 ">
            {NAV_LINKS.map((link) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href={link.href}
                key={link.key}
                className="text-lg font-semibold text-darkBlue  cursor-pointer  transition-all  no-underline border-b-2 border-gray-20"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
