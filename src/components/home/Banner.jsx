
const Banner = () => {
    return (
        <div className={`${light ? "bg-white text-black" : "bg-[#1f1b2d]"}`}>
            <div className=" bg-hero bg-cover bg-no-repeat">
                <div className="container-lg bg-hero-pattern xl:pt-48 lg:pt-28 pt-10 pb-20">
                    <div className="grid xl:grid-cols-5 lg:grid-cols-2 lg:text-start md:text-center gap-14 items-center">
                        <div className="pb-8 xl:col-span-2">
                            <h1 className="xl:text-7xl md:text-5xl text-2xl font-bold">
                                Easy way to find the right car
                            </h1>
                            <p
                                className={`md:pt-10 md:pb-10 pt-4 pb-0 md:text-xl text-base ${
                                    light ? "text-black/70" : "text-white/70"
                                }`}
                            >
                                Finder is a leading digital marketplace for the
                                automotive industry that connects car shoppers
                                with sellers. Also finder provides best car
                                service ever.
                            </p>
                        </div>
                        <div className="xl:col-span-3">
                            <img src={bannerCar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;