import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
            <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="  w-20 md:w-1/2 lg:w-[35%] md:h-14 lg:h-16" src="https://i.ibb.co/VxCrfZR/Logo.png" alt="logo" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 md:gap-3 lg:gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li> 
            <li>
            <NavLink to="/Donation">Donation</NavLink>
            </li>
            <li>
            <NavLink to="/Statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
        </div>
    );
};

export default Navbar;