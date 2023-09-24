import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";


const Home = () => {
    const datas = useLoaderData();
    return (
        <div>
            {
                datas.map( data => <Card key={data.id} data={data}></Card>)
            }

        </div>
    );
};

export default Home;