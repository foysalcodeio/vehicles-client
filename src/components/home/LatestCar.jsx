import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Cards from "../shared/Cards";
import SliderComponent from "../shared/SliderComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";


const LatestCar = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR("http://localhost:5500/cars", fetcher);
    const [carInfo, setCarInfo] = useState([]);

    useEffect(() => {
        if (data) {
            console.log("API data:", data);
            setCarInfo(data);
        }
    }, [data]);

    if (error) return <div>An error occurred.</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="container-lg pt-16 pb-32">
            <div className="grid lg:grid-cols-1 md:gap-5">
                <div className="lg:col-span-2">
                    <div className="flex flex-row-2 justify-between gap-4">
                        <h1 className="text-3xl pb-4">Latest Car</h1>
                        <button className="btn">
                          <NavLink to="/view" state={carInfo}>
                            View All
                          </NavLink>
                        </button>
                    </div>
                </div>
                <div className="">
                    <SliderComponent settings={settings}>
                        {carInfo && carInfo.length > 0 ? (
                            carInfo.map((carData, idx) => (
                                <Cards
                                    key={carData.id || idx}
                                    carData={carData}
                                />
                            ))
                        ) : (
                            <div>No cars available</div>
                        )}
                    </SliderComponent>
                </div>
            </div>
        </div>
    );
};

export default LatestCar;
