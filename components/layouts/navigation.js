import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menus } from "@/types/menu";
import ArchiveBanner from "./ArchiveBanner";
import { gaEvent } from "@/utilities/ga";
import { phCapture } from "@/utilities/posthog";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const pathName = usePathname();

  const hamburgerToggle = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQuery = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQuery);

    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      window.pageYOffset > fixedNav ? setNavbar(true) : setNavbar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        navbar
          ? "fixed top-0 left-0 right-0 z-50 w-full bg-transparent"
          : "relative"
      }
    >
      <ArchiveBanner />

      <header
        className={`flex w-full items-center transition duration-300 ease-in-out ${
          navbar
            ? "relative bg-white bg-opacity-70 dark:bg-dark dark:bg-opacity-70 backdrop-blur-sm"
            : "absolute left-0 bg-transparent"
        }`}
        style={isMobile ? { top: "4rem" } : { top: "2.5rem" }}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">

            {/* Logo */}
            <div className="px-12">
              <Link
                href="/"
                className="block py-9 text-lg font-bold text-dark dark:text-white"
              >
                {"Geva"}
              </Link>
            </div>

            <div className="flex items-center px-4">

              {/* Hamburger Button */}
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`absolute right-4 block lg:hidden ${
                  hamburger ? "hamburger-active" : ""
                }`}
                onClick={hamburgerToggle}
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              {/* Navigation Menu */}
              <nav
                className={`${hamburger ? "mt-1" : "hidden"} ${
                  isMobile
                    ? "border dark:border-white/20 dark:bg-dark z-[9999]"
                    : ""
                } transition duration-300 ease-in-out absolute right-0 top-full w-full max-w-full rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none`}
              >
                <ul className="block lg:flex">
                  {menus.map((menu, index) => (
                    <Link
                      href={menu.target}
                      className={`group mx-2 ${
                        isMobile ? "my-2" : ""
                      } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 hover:bg-blue-200/60 hover:text-cyan-600 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 ${
                        pathName === menu.target
                          ? "bg-cyan-200/60 text-cyan-600 dark:bg-cyan-300/30 dark:text-cyan-600"
                          : "text-accents-300 dark:text-slate-400"
                      }`}
                      key={index}
                      onClick={() => {
                        gaEvent({
                          action: "navigation_clicked",
                          category: "navigation",
                          label: menu.title,
                        });

                        phCapture("navigation_clicked", {
                          label: menu.title,
                          target: menu.target,
                          location: "navbar",
                        });
                      }}
                    >
                      <li>{menu.title}</li>
                    </Link>
                  ))}
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;