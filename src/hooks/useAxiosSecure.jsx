import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5500',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { LogOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, (error) => {
            if (error.response) {
                console.log('error tracking in the sector', error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('Log out the User');
                    LogOut()
                        .then(() => {
                            console.log('user Log out successfully')
                            navigate("/login")
                        })
                }
            } else if (error.request) {
                console.log('Error request : ', error.request)
            } else {
                console.log('Error message', error.message)
            }
            console.log('Error Config', error.config)
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;