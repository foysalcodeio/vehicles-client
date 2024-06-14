import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../components/shared/ErrorElement";
import Root from "../root/Root";
import Home from "../components/home/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";

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
            }
        ],
        
    },
]);

export default Router;