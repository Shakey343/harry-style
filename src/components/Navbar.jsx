// import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const handleScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <nav className="bg-hsBlack w-full sticky top-0 flex justify-between text-hsBeige py-2 px-4 items-center shadow-xl z-10">
      <NavLink to="/" className="font-bold text-4xl m-4 hover:text-hsRed transition" onClick={handleScrollTop}>Harry Style</NavLink>
      <div className="sm:text-lg">
        <HashLink smooth to="/#about" className="px-3 hover:text-hsRed transition border-solid border-r-2 border-hsBeige">About</HashLink>
        <NavLink to="/projects" className="px-3 hover:text-hsRed transition">Projects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
