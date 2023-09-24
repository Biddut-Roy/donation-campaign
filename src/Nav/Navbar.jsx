import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
            <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src="https://i.ibb.co/VxCrfZR/Logo.png" alt="logo" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
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