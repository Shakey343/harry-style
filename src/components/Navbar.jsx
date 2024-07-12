import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-hsBlack w-full sticky top-0 flex justify-between text-hsBeige py-2 px-4 items-center shadow-xl">
      <NavLink to="/" className="font-bold text-4xl mx-4 my-2 hover:text-hsRed">Harry Style</NavLink>
      <div>
        <a src="/#about" className="px-3 hover:text-hsRed border-solid border-r-2 border-hsBeige">About</a>
        <NavLink to="/projects" className="px-3 hover:text-hsRed">Projects</NavLink>
        {/* comment */}
      </div>
    </nav>
  );
};

export default Navbar;
