import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import Banner from "../Nav/Banner";


const Home = () => {
    const allData = useLoaderData();
    return (
       <div>
         <div className=" mb-4">
         <Banner></Banner>
         </div>
        <div className=" grid grid-cols-4 gap-2">
            {
                allData.map( data => <Card key={data.id} data={data}></Card>)
            }

        </div>
       </div>
    );
};

export default Home;