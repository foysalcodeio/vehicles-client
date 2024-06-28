import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import AutoSlider from "../home/AutoSlider";

const Navbar = () => {

    const { user, LogOut, setUser } = useContext(AuthContext);
    const [hide, setHide] = useState(false)

    const navigate = useNavigate();

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                console.log('user Log out successfully')
                setUser(null)
                navigate("/")
            })
    }

    const NavCarList = <>
        <li><NavLink to="/">Lamborghini</NavLink></li>
        <li><NavLink to="/">Ford</NavLink></li>
        <li><NavLink to="/">BMW</NavLink></li>
        <li><NavLink to="/">Mercedes-Benz</NavLink></li>
        <li><NavLink to="/">Tesla</NavLink></li>
    </>

    const NavLinks = <>
        <li> <NavLink className=" p-4" to={"/"}> Home </NavLink> </li>
        {/* <li> <NavLink className=" p-4" to={"/buy"}> Buy Car </NavLink> </li> */}

        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1"> <li> <NavLink className=" p-4" to={"/buy"}> Buy Car </NavLink> </li></div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-3 py-4 shadow bg-[#1a1624] text-bold  rounded-box w-48">
                {NavCarList}
            </ul>
        </div>

        <li> <NavLink className=" p-4" to={"/cart"}> My Cart </NavLink> </li>
        {
            user ? (<li> <NavLink className=" p-4" to={"/dashboard"}> Dashboard </NavLink> </li>) : ("")
        }
    </>

    const NavLinks2 = <>
        <li> <NavLink className=" p-4" to={"/"}> Home </NavLink> </li>
        <li> <NavLink className=" p-4" to={"/add-car"}> Add Car </NavLink> </li>
        <li> <NavLink className=" p-4" to={"/cart"}> My Cart </NavLink> </li>
    </>

    return (
        <div >
            <div className="container-lg">
                <AutoSlider />
                <div className="flex justify-between items-center py-5">
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                    <nav >
                        <ul className="lg:flex items-center hidden">

                            {NavLinks}

                            <li> <input type="checkbox" className="toggle toggle-warning  mt-2 me-4" /> </li>

                            <li>
                                {
                                    user ?
                                        <div className="py-1 px-2 flex gap-2 rounded-full items-center">
                                            <p className="ps-1"> {user.displayName} </p>
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img src={user.photoURL} />
                                                    </div>
                                                </label>
                                                <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1]  p-1 shadow bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md rounded-box w-24">
                                                    <p className="text-center py-1">
                                                        <button onClick={() => handleLogOut()}> Sign Out </button>
                                                    </p>
                                                </ul>
                                            </div>
                                        </div>
                                        :
                                        <NavLink className={"p-4"} to={"/login"}>
                                            Sign In
                                        </NavLink>
                                }
                            </li>
                        </ul>

                        <ul className="">
                            <button>
                                <SlMenu className="text-2xl mx-4 lg:hidden block" />
                            </button>


                            {
                                hide && (
                                    <div className="h-screen border w-80 absolute top-0 right-0 p-10 flex flex-col gap-y-8 justify-between items-center bg-[#302D3D]">
                                        <div className="flex flex-col gap-16 w-full">


                                            <button onClick={() => setHide(!hide)} className="text-end ms-auto mt-6">
                                                <RxCross1 className="text-end text-white  text-3xl" />
                                            </button>


                                            <ul className="flex flex-col items-start gap-y-10">
                                                {NavLinks2}
                                                <li>
                                                    {/* Leftbar condition area */}
                                                    {user ?
                                                        <div className=" border py-2 px-4 flex gap-3 rounded-full items-center">
                                                            <p className="">
                                                                user.displayName
                                                            </p>
                                                            <div className="dropdown dropdown-end">
                                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                                    <div className="w-10 rounded-full">
                                                                        <img src={user.photoURL} />
                                                                    </div>
                                                                </label>
                                                                <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                                    <li>
                                                                        <button onClick={handleLogOut}> Log Out </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        :
                                                        <NavLink className={"pb-3"} to={"/login"}> Login </NavLink>
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;