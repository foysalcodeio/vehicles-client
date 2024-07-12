import { Link, useLoaderData, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { AreaChart, Area, XAxis as RechartsXAxis, YAxis as RechartsYAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import check from "./../assets/check.svg";
import driving from "./../assets/driving-test.svg";
import accident from "../assets/accident.svg";
import steering from "../assets/steering-wheel.svg";
import { GiKeyCard } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";

// Wrapper for XAxis
const CustomXAxis = (props) => {
    const { dataKey = "name", ...rest } = props;
    return <RechartsXAxis dataKey={dataKey} {...rest} />;
};

// Wrapper for YAxis
const CustomYAxis = (props) => {
    const { ...rest } = props;
    return <RechartsYAxis {...rest} />;
};

const Details = () => {
    const infoDetails = useLoaderData();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log('infoDetails : ', infoDetails);
    }, [infoDetails]);
    // Rest of Component - doesn't shows double data

    const { _id, brand, condition, location, fuelType, mileage, photoLink, price, rating, title, transmission, year, description } = infoDetails;
    const navigate = useNavigate();

    const vehicles_data = {
        name: title,
        brand,
        location,
        mileage,
        price,
        photoLink,
        fuelType,
        description,
        email: user?.email
    };

    const handleBuy = () => {
        axios.post('http://localhost:5500/bookings', vehicles_data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.insertedId && user?.email) {
                    toast.success('Your data added to chart!!');
                    navigate('/cart')
                } else {
                    navigate('/login')
                }
            })
            .catch(error => {
                console.error('There was an error making the request:', error);
            });
    };

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

                    <div className="text-left">
                        <span className="py-1 px-2 bg-blue-500 me-3 rounded-md">
                            {condition}
                        </span>

                        <span className="py-1 px-2 bg-green-400 rounded-md">
                            Certified
                        </span>
                        <span className="py-1 px-2 ml-3 bg-violet-500 rounded-md">
                            Rating : {rating}
                        </span>
                    </div>

                    <h1 className="text-3xl text-left mt-4 ml-2 font-sans mb-4">{title}</h1>
                    <div className="text-left bg-[#1a1624] mt-5 mb-3 p-4 rounded-xl ">
                        <h1 className="text-3xl text-slate-300 font-sans "> Price : <b className="text-white">{price} $</b> </h1>
                    </div>

                    <div className="text-left text-slate-300 hover:border hover:border-cyan-200 bg-[#1a1624] hover:bg[#001E39]  mt-1 mb-10 p-4 rounded-xl space-y-3 ">
                        <h1 className="text-3xl font-sans mb-4 border-b">Full Specification</h1>
                        <p className="text-xl">Manufacturing Year : <b className="text-white">{year}</b> </p>
                        <p className="text-xl">Brand : <b className="text-white font-thin">{brand}</b> </p>
                        <p className="text-xl">Location : <b className="text-white font-thin">{location}</b> </p>
                        <p className="text-xl">Mileage : <b className="text-white font-thin">{mileage} K.M / hour </b> </p>
                        <p className="text-xl">Description : <b className="text-white font-thin">{description}</b> </p>
                    </div>
                </div>

                <div className="col-span-2 p-4 ml-5 rounded-lg">
                    <h1 className="tracking-wider text-black text-2xl">Speed & Mileage</h1>
                    {chartData.length > 0 ? (
                        <ResponsiveContainer className="bg-white" width="100%" height={400}>
                            <AreaChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <CustomXAxis />
                                <CustomYAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <p>Mileage is out of the specified range (10-50 km).</p>
                    )}

                    <div className="text-left mt-5 mb-10 p-4 rounded-xl ring ring-violet-200">
                        <h1 className="text-2xl font-sans mb-4">Tested some features</h1>
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
                                <p>Obstacle Alert</p>
                            </div>
                            <div className="flex text-center flex-col items-center gap-2">
                                <img src={steering} alt="" />
                                <p>Auto Driving</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left text-slate-300 border border-orange-300 hover:border hover:border-cyan-200 bg-[#1a1624] hover:bg[#001E39]  mt-1 mb-10 p-4 rounded-xl space-y-3 ">
                        <h1 className="text-3xl font-sans mb-2">Contact</h1>
                        <p className="text-xl">foysaldev1996@gmail.com</p>
                        <p className="text-xl">+88017 904777236</p>
                    </div>
                </div>
            </div>
            <Link to={`/info/${_id}`}>
                <button
                    onClick={() => handleBuy()}
                    className="btn w-full btn-warning mb-2"
                >
                    <GiKeyCard className="text-3xl" />
                    Collect/Buy Now
                </button>
            </Link>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Details;
