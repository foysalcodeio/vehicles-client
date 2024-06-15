import { NavLink } from "react-router-dom";


const DashboardMenu = () => {
    return (
        <div>
            <nav className="h-full">
                <ul>
                    <li><Link className="p-4 block" to={"/dashboard"} >Dashboard</Link></li>
                    <li><NavLink className="p-4 block" to={"/dashboard/add-car"} >Add Car</NavLink></li>
                    <li>
                        <details className="dropdown">
                            <summary className="m-1 btn bg-transparent border-0 capitalize font-normal text-base">
                                {" "}
                                Manage Product
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className="rounded-md" value="toyota">
                                    <Link to={"/dashboard/image"}></Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default DashboardMenu;