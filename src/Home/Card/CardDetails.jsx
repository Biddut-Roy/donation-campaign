import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const CardDetails = () => {

     const data = useLoaderData();
    const {id}  = useParams();

    const findCart = data?.find(cart => cart.id == id)

        const handelClick = () =>{
            
            const donateBox = [];
            const donation = JSON.parse(localStorage.getItem("Donate"))
            if(!donation){
                donateBox.push(findCart);
                localStorage.setItem("Donate", JSON.stringify(donateBox))
                swal("Thanks", "Donation Complete", "success");

            }else{
                 donateBox.push(...donation , findCart)
                 localStorage.setItem("Donate", JSON.stringify(donateBox))
                 swal("Thanks", "Donation complete", "success");

            }
        }

    return (
        <div className=" my-10">
           <div className=" w-10/12 mx-auto">
                <div className=" relative"><img className=" w-full mx-auto h-[400px] " src={findCart.Picture} alt="Shoes" />
                    <div className="w-full mx-auto opacity-80 py-4 bottom-0 bg-[#4e4d4d] absolute"> 
                    <button onClick={handelClick} className=" ml-5 px-1 py-1 text-white" style={{backgroundColor: findCart.Color_for_text }}>Donate {findCart.Price}</button> 
                    </div>
                    {/* <button className="" style={{backgroundColor: findCart.Color_for_text }}>Donate {findCart.Price}</button> */}
                </div>
                <div className="card-body w-full mx-auto">
                    <h2 className="card-title">{findCart.Title}</h2>
                    <p>{findCart.Description}</p>
                    
                </div>
                </div>
        </div>
    );
};

export default CardDetails;