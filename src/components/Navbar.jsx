import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-4 w-20' src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/abhijeet-singh-rathore-3319a9247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://github.com/ThakurAbhi47" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-gray-700 transition-colors" />
        </a>
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
        </a> */}
        <a href="https://www.instagram.com/thakur_abhi_47?igsh=MTZ4NDhkeWV0cTNyaw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
