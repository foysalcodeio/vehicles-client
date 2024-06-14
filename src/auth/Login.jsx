import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../src/assets/signIn.svg";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    
    const [showPassword, setShowPassword] = useState(' ')

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <div className="container-lg">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 items-center gap-10 justify-between my-16  lg:col-span-2 md:col-span-2">

                    {/* <div className="h-full flex flex-col justify-between items-start lg:col-span-3 md:col-span-1  bg-[#282435] rounded-lg md:px-10 p-6 m-3">
                        <h2 className="text-4xl pb-8 ">
                            Hey there! <br /> Welcome back.
                        </h2>
                        <img className="" src={logo} alt="" />
                    </div> */}


                    <div className=" lg:col-span-2 md:col-span-2">
                        <h2 className="text-4xl pb-8 ">
                            Hey there! <br /> Connect with response.
                        </h2>
                        <img className="" src={logo} alt="" />
                    </div>

                    <div className=" lg:col-span-2 md:col-span-2">
                        <div className="bg-[#282435] rounded-lg md:px-10 p-6 m-3">
                            <h2 className="text-4xl pb-8 pt-4">Sign In</h2>
                            <form onSubmit={handleSignIn} >

                                <label htmlFor="email" className="block md:w-96 w-full pb-2 font-semibold">
                                    Your Email{" "}
                                    <span className="text-red-600">*</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                    placeholder="Enter email here.."
                                />



                                <div>
                                    <label htmlFor="password" className="block w-full pb-2 pt-8 font-semibold">
                                        Password <span className="text-sm opacity-50">min. 8 char</span>
                                        <span className="text-red-600">*</span>
                                    </label>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            required
                                            className="r rounded-md w-full py-3 px-4 bg-[#302D3D] pr-12" // Add pr-12 to provide space for the icon
                                            placeholder="Enter password here.."
                                        />
                                        <span
                                            className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash className="text-2xl" /> : <FaEye className="text-2xl" />}
                                        </span>
                                    </div>
                                </div>

                                <button type="submit" className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md">
                                    Sign In
                                </button>
                            </form>

                            <div className="divider">OR</div>



                            {/* Google Authentication */}
                            <button type="submit" className="w-full flex items-center justify-center gap-3 py-3 border border-[#FD5631] hover:bg-[#fd3831]/40 rounded-md text-dark"                          >
                                <FcGoogle className="text-2xl"></FcGoogle>Sign In with Google</button>
                            <div className="">
                                <p className=" pt-6">
                                    Don&#39;t have any account?{" "}
                                    <Link className="underline text-[#FD5631]"
                                        to={"/register"}>
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;