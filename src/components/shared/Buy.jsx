import { useEffect, useState } from "react";
import useSWR from "swr";

const Buy = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR("http://localhost:5500/cars", fetcher);
    const [carInfo, setCarInfo] = useState([]);

    useEffect(() => {
        if (data) {
            console.log("all data is ", data);
            setCarInfo(data);
        }
    }, [data]);

    if (error) return <div>An error occurred</div>;
    if (isLoading) return <div>Loading ... </div>;

    return (
        <div>
            this is buy
        </div>
    );
};

export default Buy;
