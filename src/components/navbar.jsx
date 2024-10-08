// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




function Navbar() {
  return (
    <nav className="flex mb-20 items-center justify-between py-6 fixed top-0 left-0 w-full px-10 z-50">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="mx-2 text-4xl font-thin">PS</h2>
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/singhpriteshh/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/singhpriteshh" target="_blank"><FaGithub /></a>
        <a href="https://x.com/singhpriteshh" target="_blank"><FaXTwitter /></a>
        <a href="https://www.instagram.com/singhpriteshh/" target="_blank"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;