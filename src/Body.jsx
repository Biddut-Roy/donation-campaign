import { Outlet } from "react-router-dom";
import Navbar from "./Nav/Navbar";



const Body = () => {

    return (
      <div className=" w-10/12 mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
      </div>
    );
};

export default Body;