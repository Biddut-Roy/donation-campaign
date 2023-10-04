import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const [store, setStore] = useState();
    const Total = useLoaderData()

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("Donate"))
        const storeDonate = getData?.length;
        setStore(storeDonate)
    }, [store])

    const fixedValue = (Total.length - store || 0);

    const data = [
        ["Donation Type", "Donation Value", { role: "style" }],
        ["Total Donation", fixedValue, "#E38627"],
        ["Your Donation", store || 0, "#C13C37"],
        
    ];

    return (
        <div className="w-10/12 mt-10 mx-auto">
            <Chart
                chartType="PieChart"
                data={data}
                width={"100%"}
                height={"400px"}
                options={{
                    legend: { position: "bottom" },
                   
                }}
            />
        </div>
    );
};

export default Statistics;
