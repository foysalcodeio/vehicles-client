import { useLoaderData } from "react-router-dom";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import check from "./../assets/check.svg"
import driving from "./../assets/driving-test.svg"
import accident from "../assets/accident.svg"
import steering from "../assets/steering-wheel.svg"


const Details = () => {
    const infoDetails = useLoaderData();
    console.log('infoDetails : ', infoDetails);

    const { brand, condition, location, mileage, photoLink, price, rating, title, transmission, year } = infoDetails;
    console.log('This is', brand);

    const chartData = [
        { name: 'Mileage-10Km', value: mileage },
        { name: 'Mileage-20km', value: mileage + mileage },
        { name: 'Mileage-30Km', value: mileage },
    ];


    return (
        <div className="container-lg">
            <div className="grid grid-cols-4 text-center">
                <div className="col-span-2 rounded-t-lg">
                    {/* info */}
                    <div className="grid grid-cols-2 text-center mb-5 border-b">
                        <div>
                            <p className="tracking-wider">Fuel Capacity</p>
                            <h1 className="text-2xl">2903 Ltr</h1>
                        </div>
                        <div>
                            <p className="tracking-wider">KM Driven</p>
                            <h1 className="text-2xl">{mileage} KM</h1>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <img src={photoLink} alt={title} />
                    </div>

                </div>

                <div className="col-span-2 p-4 ml-5 rounded-lg">

                    <h1 className="tracking-wider text-black text-2xl">Speed & Mileage</h1>
                    {chartData.length > 0 ? (
                        <ResponsiveContainer className="bg-white" width="100%" height={400}>
                            <AreaChart
                                data={chartData}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <p>Mileage is out of the specified range (10-50 km).</p>
                    )}


                    <div className="text-left mt-5 mb-10 p-4 rounded-xl ring ring-violet-200">
                        <h1 className="text-2xl font-sans">Tested some features</h1>
                        <div className="flex justify-between">
                            <div className="flex flex-col text-center items-center gap-2">
                                <img src={check} alt="" />
                                <p>Checked and Certified</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <img src={driving} alt="" />
                                <p>Fully QC Check</p>
                            </div>
                            <div className="flex text-center flex-col items-center gap-2">
                                <img src={accident} alt="" />
                                <p>Obstacle Atert</p>
                            </div>
                            <div className="flex text-center flex-col items-center gap-2">
                                <img src={steering} alt="" />
                                <p>Auto Driving</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Details;




