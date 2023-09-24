import { useEffect, useState } from "react";
import DonateCart from "./DonateCart";



const Donate = () => {
    const [data , setData] = useState([]);

    useEffect(()=>{
        const getData = JSON.parse(localStorage.getItem("Donate"))
        setData(getData)
    },[])


    return (
       <>
            {
                 data.map( donate => <DonateCart key={donate.id} donate={donate}></DonateCart>)
             }
       </>
    );
};



export default Donate;