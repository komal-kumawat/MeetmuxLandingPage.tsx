"use client";

import React, { useState } from "react";
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
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "FAQ", link: "#faq" },
    { name: "CTA", link: "#cta" },
    { name: "Contact", link: "#footer" },
  ];

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <ResizableNavbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="logo-container relative z-20 mr-8 flex items-center space-x-3 px-3 py-2 text-sm font-bold"
          >
            <img
              src="/asets/meetmuxLogo.svg"
              alt="MeetMux Logo"
              className="h-full w-full object-contain filter brightness-0 invert"
            />
          </a>
        </div>

        {/* Navigation Items */}
        <NavItems
          items={navItems}
          onItemClick={handleItemClick}
          className="text-neutral-700 dark:text-neutral-200 hover:text-pink-500 dark:hover:text-pink-400"
        />

        {/* Right side - Theme Toggle and Download Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavbarButton
              href="#download"
              variant="gradient"
              className="download-btn-enhanced relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 border-none px-6 py-3 font-semibold"
            >
              <span className="relative z-10">Download</span>
            </NavbarButton>
          </motion.div>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <a
            href="#"
            className="logo-container relative z-20 flex items-center space-x-3 px-3 py-2 text-sm font-bold"
          >
            <div className="logo-bg flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 p-2 shadow-lg">
              <img
                src="assets/meetmuxLogo.svg"
                alt="MeetMux Logo"
                className="h-full w-full object-contain filter brightness-0 invert"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              MeetMux
            </span>
          </a>

          {/* Mobile controls */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col space-y-4 w-full">
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
