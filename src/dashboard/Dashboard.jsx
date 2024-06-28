import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>

            <div className="grid grid-cols-7 justify-between items-start h-[89vh]">
                <div className="col-span-1 h-[89vh] rounded-r-xl sticky">
                
                </div>
                <div className="col-span-6 pt-6 ms-6 h-[89vh] overflow-scroll overflow-x-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;