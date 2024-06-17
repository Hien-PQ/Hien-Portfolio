import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="py-6 flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center ml-4 text-white">Navbar</div>
      <div className="flex justify-center items-center gap-4 mx-6">
        <FaGithub />
        <FaEnvelope />
        <FaLinkedin />
        <FaPhone />
      </div>
    </nav>
  );
};

export default Navbar;
