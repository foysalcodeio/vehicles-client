import { IoPricetags, IoSettingsSharp, IoFitness } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div data-aos="fade-down" className="container-lg pt-16 pb-32 ">
            <div className="grid lg:grid-cols-6 md:gap-5 gap-6">

                {/* left side */}
                <div className="lg:col-span-2">
                    <div className="flex gap-4">
                        <h2 className=" font-mono text-2xl pb-4">Our Services</h2>
                        <GrServices className="text-4xl" />
                    </div>

                    <div className="divider"></div>

                    <h1 className="font-mono md:text-5xl text-3xl">
                        Feel the best experience with rental deals
                    </h1>

                </div>


                <div className="lg:col-span-1"></div>


                {/* Right side */}
                <div className="lg:col-span-3 space-y-10">



                    <div className="flex md:gap-8 gap-3">
                        {/* LOGO SECTION */}
                        <div className="">
                            <div className="text-gray-300 shadow-xl inline-block rounded-sm bg-[#302D3D] p-5">
                                <IoPricetags className="text-3xl"></IoPricetags>
                            </div>
                        </div>

                        {/* PARAGRAPH SECTION */}
                        <div className="text-2xl">
                            <h1>Deals with every budget</h1>
                            <p className="text-base text-slate-400">
                                incredible price on branded cars and
                                packages worldwide. cars with a full service
                                history are more attractive to potential
                                buyers and tend to hold their value better
                            </p>
                        </div>
                    </div>

                    <div className="flex md:gap-8 gap-3">
                        {/* LOGO SECTION */}
                        <div className="">
                            <div className="text-gray-300 shadow-xl inline-block rounded-sm bg-[#302D3D] p-5">
                                <IoSettingsSharp className="text-3xl"></IoSettingsSharp>
                            </div>
                        </div>

                        {/* PARAGRAPH SECTION */}
                        <div className="text-2xl">
                            <h2>Deals with every budget</h2>
                            <p className="text-base text-slate-400 pt-2">
                                Changing your engine oil and oil filter
                                every year will lubricate moving parts more
                                effectively and help to increase fuel
                                efficiency
                            </p>
                        </div>
                    </div>

                    <div className="flex md:gap-8 gap-3">
                        {/* LOGO SECTION */}
                        <div className="">
                            <div className="text-gray-300 shadow-xl inline-block rounded-sm bg-[#302D3D] p-5">
                                <IoFitness className="text-3xl"></IoFitness>
                            </div>
                        </div>

                        {/* PARAGRAPH SECTION */}
                        <div className="text-2xl">
                            <h2>Deals with every budget</h2>
                            <p className="text-base text-slate-400 pt-2">
                                Regular checks to key components and the
                                replacement of worn parts will detect and
                                eliminate any faults that are likely to
                                occur detect and eliminate any faults
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;