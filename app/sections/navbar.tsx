"use client";
import clsx from "clsx";
import { AlignJustify, Calendar, Contact, HandCoins, Utensils, X } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

// type Props = {}

const links = [
  {
    name: "Event Detail",
    href: "event-detail",
    icon: <Calendar size={20} />
  },
  {
    name: "Menu",
    href: "menu",
    icon: <Utensils size={20} />
  },
  {
    name: "Pricing",
    href: "pricing",
    icon: <HandCoins size={20} />
  },
  {
    name: "Contact Us",
    href: "contact-us",
    icon: <Contact size={20} />
  },
];

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  console.log(section);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <>
      <MobileNavBar />
      <DesktopNavBar />
    </>
  );
};

export default Navbar;

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav
      onClick={() => setIsOpen(!isOpen)}
      className="flex md:hidden absolute px-4 py-2 bg-black/50 top-0 z-[30000] w-full items-center justify-between "
    >
      <div className="w-full">
        <button
          className="size-8 relative  z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AlignJustify
            className={clsx(
              "text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 cursor-pointer",
              {
                "opacity-0 z-0": isOpen,
                "opacity-100 z-10": !isOpen,
              }
            )}
          />
        </button>
      </div>
      <div className="">
        <Image
          className="mx-auto border-2 border-red-400 rounded-full"
          src="/images/chefTeeLogo.png"
          alt="logo"
          width={45}
          height={45}
          priority        
        />
      </div>
      <div className="flex-1"></div>
      <div
        className={clsx(
          "fixed z-10 inset-0 w-full h-full bg-black/50 transition-all ease-in-out duration-300",
          {
            "left-0": isOpen,
            "left-[-100%]": !isOpen,
          }
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-8/12 px-2 py-2 h-full bg-white"
        >
          <div className="flex items-center justify-between">
            <button className="size-8  z-50" onClick={() => setIsOpen(!isOpen)}>
              <X
                className={clsx("size-8 cursor-pointer", {
                  "opacity-100 z-10 text-black": isOpen,
                  "opacity-0 z-0 text-white": !isOpen,
                })}
              />
            </button>
            <div className="">
              <Image
                className="mx-auto"
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {links.map((link, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToSection(link.href);
                  }}
                  className="cursor-pointer flex items-center gap-2"
                >
                  {link.icon}
                  <span className="text-black text-lg font-bold ">{link.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

const DesktopNavBar = () => {
  return (
    <nav className="absolute hidden  px-10 py- bg-black/50 top-0 z-[30000] w-full md:flex items-center justify-between ">
      <aside className="flex items-center gap-7">
        {links.map((link, index) => {
          const halfLength = links.length / 2;
          if (index < halfLength) {
            return (
              <div
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="cursor-pointer"
              >
                <span
                  style={{ fontFamily: "var(--font-noto-sans)" }}
                  className="text-white text-lg font-bold "
                >
                  {link.name}
                </span>
              </div>
            );
          }
        })}
      </aside>
      <aside className="text-white">
        <Image style={{ filter: "invert(1)" }} src="/images/logo.png" alt="logo" width={60} height={60} />
      </aside>
      <aside className="flex items-center gap-7">
        {links.map((link, index) => {
          const halfLength = links.length / 2;
          if (index >= halfLength) {
            return (
              <div
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="cursor-pointer"
              >
                <span
                  style={{ fontFamily: "var(--font-noto-sans)" }}
                  className="text-white text-lg font-bold "
                >
                  {link.name}
                </span>
              </div>
            );
          }
        })}
      </aside>
      {/* <span className='text-white'>Hello</span> */}
    </nav>
  );
};
