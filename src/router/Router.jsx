import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../components/shared/ErrorElement";
import Root from "../root/Root";
import Home from "../components/home/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import EditItems from "../dashboard/EditItems";
import Cart from "../components/navbar/Cart";
import Dashboard from "../dashboard/Dashboard";
import ViewAll from "../components/shared/ViewAll";
import Buy from "../components/shared/Buy";
import PrivateRoute from "./PrivateRoute";
import Statistic from "../dashboard/Statistic";
import Details from "../dashboard/Details";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "add/:id",
                element: <EditItems />,
                loader: ({ params }) => fetch(`http://localhost:5500/cars/${params.id}`)
            },
            {
                path: "info/:id",
                element: <Details />,
                loader: ({ params }) => fetch(`http://localhost:5500/cars/${params.id}`)
            },
            {
                path: "buy",
                element: <Buy />
            },
            {
                path: "cart",
                element: <PrivateRoute><Cart /></PrivateRoute>,
            },
            {
                path: "view",
                element: <ViewAll />,
                loader: () => fetch(`http://localhost:5500/cars/`)
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "statistic",
                element: <Statistic />
            }
            
            
        ],
        
    },
]);

export default Router;