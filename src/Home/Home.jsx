import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import Banner from "../Nav/Banner";
import { useState } from "react";


const Home = () => {
    const allData = useLoaderData();

    const [dataBox , setDataBox] = useState(allData)


    const clickHandel =(e)=>{
        e.preventDefault();
         const searchText = e.target.search.value;
         const searchData = allData.filter(data => data.Category.toLowerCase() === searchText.toLowerCase());
         setDataBox(searchData)
    }

    
    return (
       <div>
         <div className=" mb-4">
         <Banner  clickHandel={clickHandel}></Banner>
         </div>
        <div className=" grid grid-cols-4 gap-2">
            {
                dataBox.map( data => <Card key={data.id} data={data}></Card>)
            }

        </div>
       </div>
    );
};

export default Home;