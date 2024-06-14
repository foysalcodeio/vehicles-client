import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    return (
        <div >
            <div className="container-lg">
                <div className="flex justify-between items-center py-5">
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                    <nav >
                        <ul className="lg:flex items-center hidden">
                            <li> <NavLink className=" p-4" to={"/"}> Home </NavLink> </li>
                            <li> <NavLink className=" p-4" to={"/cart"}> My Cart </NavLink> </li>
                            <li> <NavLink className=" p-4" to={"/dashboard"}> Dashboard </NavLink> </li>



                            <li>
                                <input type="checkbox" className="toggle toggle-warning  mt-2 me-4" />
                            </li>

                            <li>


                                <div>
                                    <p className="ps-1"> user-displayName </p>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                {/* <img src={user.photoURL} /> */}
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1]  p-1 shadow bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md rounded-box w-24">
                                            <p className="text-center py-1">
                                                <button> Sign Out </button>
                                            </p>
                                        </ul>
                                    </div>
                                </div>

                                <NavLink className={"p-4"} to={"/login"}>
                                    Sign In
                                </NavLink>

                            </li>
                        </ul>

                        {/* <ul className="">
                            <button>
                                <SlMenu className="text-2xl mx-4 lg:hidden block" />
                            </button>

                            <div className="h-screen border w-80 absolute top-0 right-0 p-10 flex flex-col gap-y-8 justify-between items-center bg-[#302D3D]">
                                <div className="flex flex-col gap-16 w-full">
                                    <button
                                       
                                        className="text-end ms-auto mt-6"
                                    >
                                        <RxCross1 className="text-end text-white  text-3xl" />
                                    </button>
                                    <ul className="flex flex-col items-start gap-y-10">

                                        <li> <NavLink className=" p-4" to={"/"}> Home </NavLink> </li>
                                        <li> <NavLink className=" p-4" to={"/add-car"}> Add Car </NavLink> </li>
                                        <li> <NavLink className=" p-4" to={"/cart"}> My Cart </NavLink> </li>
                                       
                                        <li>

                                                <div className=" border py-2 px-4 flex gap-3 rounded-full items-center">
                                                    <p className="">
                                                        user.displayName
                                                    </p>
                                                    <div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                            <div className="w-10 rounded-full">
                                                                <img />
                                                            </div>
                                                        </label>
                                                        <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                            <li>
                                                                <button> Log Out </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                             
                                                <NavLink className={"pb-3"} to={"/login"}> Login </NavLink>

                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </ul> */}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;