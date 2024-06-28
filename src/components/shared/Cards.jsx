import { GiSpeedometer } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import { RiOilLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GiKeyCard } from "react-icons/gi";
import { Link } from "react-router-dom";

const Cards = ({ carData }) => {
    const {_id, photoLink, title, price, location, mileage, transmission, fuelType } = carData;
    // console.log('id -> ', carData._id)
    return (
        <div className="w-3/4 m-auto">
            <div> </div>
            <div className="indicator bg-[#1a1624]  card  w-96">
                <figure>
                    <img
                        src={photoLink}
                        alt="car!" />
                    <span className="indicator-item badge ">new</span>
                </figure>


                <div className="card-body">
                    <div className="border-b pb-2 mb-2">
                        <div className="items-center">
                            <h2 className="card-title">{title}</h2>
                            <p className="text-orange-500">$ {price}</p>
                        </div>
                    </div>

                    <div className="flex items-center mt-2 mb-2">
                        <GrLocation />
                        <p className="ml-2"> {location}</p>
                    </div>

                    <div className="flex justify-between">
                        <div className="bg-[#0f0a1b] p-4 rounded-lg">
                            <GiSpeedometer className="text-3xl" />
                            <p>{mileage} mi</p>
                        </div>
                        <div className="bg-[#0f0a1b] p-4 rounded-lg">
                            <TbManualGearbox className="text-3xl" />
                            <p>{transmission}</p>
                        </div>
                        <div className="bg-[#0f0a1b] p-4 items-center rounded-lg">
                            <RiOilLine className="text-3xl" />
                            <p>{fuelType}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="card-actions justify-center mt-3">
                            <Link to={`/add/${_id}`}>
                                <button className="btn btn-warning">
                                    Buy Now <GiKeyCard className="text-2xl" />
                                </button>
                            </Link>
                        </div>

                        <div className="card-actions justify-end mt-3">
                            <button className="btn bg-[#0f0a1b] tracking-wider ">
                                Details <MdKeyboardDoubleArrowRight />
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cards;