import logo from "../assets/meetmuxLogo.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-8 md:px-20 lg:px-40 py-10 flex flex-col gap-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-full justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-4">
          <img src={logo} alt="MeetMux Logo" width={180} />
          <p className="text-gray-400 max-w-md">
            Connecting people through shared activities and meaningful experiences. Build real relationships in the real world.
          </p>

          <div className="flex items-center gap-3 mt-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/meetmux/?igsh=MWdsZmV0eWZsaDVtdw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 bg-gray-700 text-gray-100 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/meetmux/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 bg-gray-700 text-gray-100 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300" > <FaLinkedin size={20} /> </a>
          </div>
        </div>

        {/* Middle & Right Sections */}
        <div className="flex flex-1 flex-wrap justify-between gap-10">
          {/* Product */}
          <div className="flex flex-col gap-3 min-w-[120px]">
            <h3 className="text-gray-100 text-lg font-semibold">Product</h3>
            <a href="/#features" className="text-sm hover:text-gray-100 transition">Features</a>
            <a href="/#about" className="text-sm hover:text-gray-100 transition">How It Works</a>
            <a href="/#Pricing" className="text-sm hover:text-gray-100 transition">Pricing</a>
            <a href="/#FAQ" className="text-sm hover:text-gray-100 transition">FAQ</a>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3 min-w-[120px]">
            <h3 className="text-gray-100 text-lg font-semibold">Support</h3>
            <a href="/support" className="text-sm hover:text-gray-100 transition">Support</a>
            <a href="/privacy-policy" className="text-sm hover:text-gray-100 transition">Privacy Policy</a>
            <a href="/terms-of-use" className="text-sm hover:text-gray-100 transition">Terms Of Use</a>
          </div>

          {/* Join Us */}
          <div className="flex flex-col gap-3 min-w-[120px]">
            <h3 className="text-gray-100 text-lg font-semibold">Join Us</h3>
            <a href="/careers" className="text-sm hover:text-gray-100 transition">Career at MeetMux</a>
            <a href="/vendor" className="text-sm hover:text-gray-100 transition">Become a Vendor</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Bottom Section */}
      <div className="flex items-center justify-center text-sm text-gray-500 ">
        <span>© 2024 MeetMux. All rights reserved.Contact:<a href="/support" className="text-purple-400 hover:text-purple-300 transition">
          support@meetmux.com
        </a></span>
      </div>
    </footer>
  );
};

export default Footer;