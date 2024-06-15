import { Link } from "react-router-dom";
import brand1 from "./../../assets/brands/pngeg.png"
import brand2 from "./../../assets/brands/pngeg1.png"
import brand3 from "./../../assets/brands/pngegg2.png"
import brand4 from "./../../assets/brands/pngegg3.png"
import brand5 from "./../../assets/brands/pngegg1.png"
import brand6 from "./../../assets/brands/pngegg.png"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Brands = () => {
    
    useEffect(()=> {
        Aos.init({duration: 2000})
    })
    
    return (
        <div data-aos="zoom-in" className="container-lg pb-16">
            <div className="flex bg-[#1a1624] rounded-xl items-center justify-center gap-16 md:flex-row md:flex-nowrap flex-wrap">

                <div className="">
                    <Link to={"/product/tesla"}>
                        <span className="">
                            <img
                                className="md:h-48 h-28 md:aspect-[3/2] brand object-contain"
                                src={brand1}
                                alt=""
                            />
                        </span>
                    </Link>
                </div>

                <div className="">
                    <Link to={"/product/ford"}>
                        <span className="">
                            <img
                                className="md:h-20 h-10 md:aspect-[3/2] brand object-contain"
                                src={brand2}
                                alt=""
                            />
                        </span>
                    </Link>
                </div>

                <div className="">
                    <Link to={"/product/bmw"}>
                        <span className="">
                            <img
                                className="md:h-16 h-8 md:aspect-[3/2] brand  object-contain"
                                src={brand3}
                                alt=""
                            />
                        </span>
                    </Link>
                </div>

                <div className="">
                    <Link to={"/product/honda"}>
                        <span className="">
                            <img
                                className="md:h-48 h-10 md:aspect-[3/2] brand object-contain"
                                src={brand4}
                                alt=""
                            />
                        </span>
                    </Link>
                </div>

                <div className="">
                    <Link to={"/product/mercedes"}>
                        <span className="">
                            <img
                                className="md:h-16 h-8 md:aspect-[3/2] brand object-contain"
                                src={brand5}
                                alt=""
                            />
                        </span>
                    </Link>
                </div>


                
                <div className="">
                    <Link to={"/product/toyota"}>
                        <span className="">
                            <img
                                className="md:h-48 h-20 md:aspect-[3/2] brand object-contain"
                                src={brand6}
                                alt=""
                            />
                        </span>
                    </Link>
                </div>


                

                

            </div>
        </div>
    );
};

export default Brands;