import { useEffect } from "react";
import bannerCar from "./../../assets/hero-car.png"
import Aos from "aos";
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    
    return (
        <div >
            <div className=" bg-hero bg-cover bg-no-repeat">
                <div className="container-lg bg-hero-pattern xl:pt-48 lg:pt-28 pt-10 pb-20">
                    <div className="grid xl:grid-cols-5 lg:grid-cols-2 lg:text-start md:text-center gap-14 items-center">
                        <div data-aos="fade-right"  className="pb-8 xl:col-span-2">
                            <h1 className="tracking-wide xl:text-7xl md:text-5xl text-2xl font-bold">
                                DISCOVER PERFECT TOY
                            </h1>
                            <p className="tracking-widest md:pt-10 md:pb-10 pt-4 pb-0 md:text-xl text-base">
                                As a premier digital hub in the automotive market, Finder links car shoppers with sellers and provides exemplary car services
                            </p>
                        </div>
                        <div data-aos="fade-left"  className="xl:col-span-3">
                            <img src={bannerCar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;