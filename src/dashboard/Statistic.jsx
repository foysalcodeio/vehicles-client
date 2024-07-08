import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';

const Statistic = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/cars')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setInfo(data); // Storing fetched data in state
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const limitedData = info.slice(1, 6); // Limit the data to the first 8 items

    return (
        <div className="container-lg pt-16 pb-32">
            <div className="grid lg:grid-cols-1">
                <div className="lg:col-span-2">
                    <h1 className="text-3xl pb-4 mb-5">Latest Car in Rating 1 weak</h1>
                    <div>
                        <div>
                            <LineChart
                                width={1400}
                                height={500}
                                data={limitedData} // Using the limited data here
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="title" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 3 }} />
                                <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
                            </LineChart>
                        </div>

                        <h1 className="text-3xl pb-4 mb-5">Highest price range 1 weak</h1>
                        <div>
                            <AreaChart
                                width={1200}
                                height={400}
                                data={limitedData} // Using the limited data here
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="title" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="price" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="mileage" stackId="1" stroke="#ffc658" fill="#8884d8" />
                                <Area type="monotone" dataKey="rating" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
