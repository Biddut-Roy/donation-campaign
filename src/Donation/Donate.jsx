import { useEffect, useState } from "react";
import DonateCart from "./DonateCart";



const Donate = () => {
    const [data , setData] = useState([]);
    const [ remove , setRemove] = useState(true);

    useEffect(()=>{
        const getData = JSON.parse(localStorage.getItem("Donate"))
        setData(getData)
    },[])

    const removeHandel = () =>{
        setRemove(!remove)
    }


    return (
       <>
           <div className=" grid grid-cols-2 gap-4">
                   {
                        remove ?  data.slice(0,4).map( donate => <DonateCart key={donate.id} donate={donate}></DonateCart>)
                        : data.map( donate => <DonateCart key={donate.id} donate={donate}></DonateCart>)
                        
                    }
           </div>
            {/* buttoon  */}
        <div className=" text-center">
            {
              remove && data.length > 4 && <button onClick={removeHandel} className="btn btn-primary my-10">See All</button>
            }
        </div>
       </>
    );
};



export default Donate;