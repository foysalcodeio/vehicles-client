
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import errorImage from "../../assets/error.png";


const ErrorElement = () => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <img className="w-1/4" src={errorImage} alt="" />
            <h1 className="text-5xl pt-5">Page Not Found</h1>
            <Link
                to={"/"}
                className="bg-[#302D3D]  py-4 px-8 rounded mt-6 shadow-xl hover:bg-[#2d283f]"
            >
                {" "}
                <span>
                    Go home page <MdOutlineArrowForwardIos className="inline" />{" "}
                </span>
            </Link>
        </div>
    );
};

export default ErrorElement;