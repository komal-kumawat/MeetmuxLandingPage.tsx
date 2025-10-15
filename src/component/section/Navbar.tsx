"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { title: "About", href: "#about" },
  { title: "Features", href: "#features" },
  { title: "FAQ", href: "#FAQ" },
  { title: "Career", href: "#careers" },

];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Motion variants for light mode
  const variants = {
    top: {
      height: 50,
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.4)", // semi-transparent white
      backdropFilter: "blur(0px)",
      padding: "0 1.5rem",
      color: "#1f2937", // dark text
    },
    scrolled: {
      height: 50,
      width: "90%",
      backgroundColor: "rgba(243, 244, 246, 0.9)", // light gray
      backdropFilter: "blur(10px)",
      padding: "0 1rem",
      color: "#1f2937", // dark text
    },
  };

  return (
    <motion.div
      className="sticky top-0 z-50 w-[90%]  mx-auto flex items-center justify-between rounded-xl border border-[rgba(0,0,0,0.1)] shadow-sm"
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="text-lg font-bold cursor-pointer">
        <a href="/">
          <img src="/meetmuxLogo.svg" alt="" width={150} />
        </a>
      </div>

      <div className="flex gap-6 font-medium text-gray-500 hidden md:flex">
        {links.map((link, idx) => (
          <div key={link.title} className="w-full">
            <a
              href={link.href}
              className="hover:text-purple-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </a>

          </div>
        ))}

      </div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-40 md:hidden bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden z-50"
        >
          {links.map((link, idx) => (
            <div key={link.title} className="w-full">
              <a
                href={link.href}
                className="block w-full text-center py-3 text-gray-700 hover:bg-purple-500 hover:text-white transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
              {idx !== links.length - 1 && (
                <hr className="border-gray-200 my-0" />
              )}
            </div>
          ))}
        </div>
      )}



    </motion.div>
  );
};

export default Navbar;