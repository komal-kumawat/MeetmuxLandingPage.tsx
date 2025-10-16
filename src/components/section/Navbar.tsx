"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/ResizableNavbar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { motion , AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "FAQ", link: "#faq" },
    { name: "CTA", link: "#cta" },
    { name: "Contact", link: "#footer" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);



  const handleItemClick = () => setIsOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      };

    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ResizableNavbar className="top-2 transition-all duration-300">
      <NavBody className="px-5 ">
        <a href="/">
          <img src="/meetmuxLogo.svg" alt="MEETMUX" width={150}>
          </img>
        </a>
        {!isScrolled &&
          <NavItems items={navItems} onItemClick={handleItemClick}
            className="text-neutral-700 dark:text-neutral-200 hover:text-pink-500 dark:hover:text-pink-400"
          />
        }
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div
                key="download-btn"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavbarButton
                    href="#download"
                    variant="gradient"
                    className="download-btn-enhanced relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 border-none px-6 py-3 font-semibold"
                  >
                    <span className="relative z-10">Download</span>
                  </NavbarButton>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="hamburger"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <MobileNavToggle
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </motion.div>
            )}
          </AnimatePresence>


        </div>

      </NavBody>
      <MobileNav >
        <MobileNavHeader className="px-5">
          <a href="/">
            <img src="/meetmuxLogo.svg" alt="MeetMux" width={100} />
          </a>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div ref={menuRef} className="flex flex-col space-y-4 w-full">
            {navItems.map((item, idx) => (
              <motion.a
                key={`mobile-${idx}`}
                href={item.link}
                onClick={handleItemClick}
                className="block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavbarButton
                  href="#download"
                  variant="gradient"
                  className="download-btn-enhanced relative overflow-hidden w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 border-none px-6 py-3 font-semibold"
                >
                  <span className="relative z-10">Download</span>
                </NavbarButton>
              </motion.div>
            </div>
          </div>
        </MobileNavMenu>


      </MobileNav>

    </ResizableNavbar>

  );
};
