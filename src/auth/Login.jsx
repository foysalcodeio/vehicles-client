import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../src/assets/signIn.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const Login = () => {
    const { signInAccess, signWithGoogle, passwordReset } = useContext(AuthContext);


    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();


    //path & location store data that which gonna go to 
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Reset
        setLoginError('');
        setSuccess('');

        if (password.length < 8) {
            setLoginError('Your Password must be at least 8 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setLoginError('1 letter must be capital');
            return;
        }

        signInAccess(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setSuccess('User login successfully');

                //get access jwt token from backend
                const user = { email }
                axios.post('http://localhost:5500/jwt', user, {withCredentials: true })
                    .then(response => {
                        console.log('response data ->', response.data)
                        if (response.data.success) {
                           navigate(location?.state ? location?.state : '/');
                        }
                    })
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    };

    const handleSignInWithGoogle = () => {
        signWithGoogle()
            .then((result) => {
                console.log(result);
                setSuccess('User login with Google successfully');

                const email = result.user.email; // Extracting email from the result
                const user = { email }; // Creating user object with email

                axios.post('http://localhost:5500/jwt', user, { withCredentials: true })
                    .then(response => {
                        console.log('response data -', response.data);
                        if (response.data.success) {
                            navigate(location?.state ? location?.state : '/');
                        }
                    });
            })
            .catch((error) => {
                console.log(error);
                setLoginError(error.message);
            });
    };


    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please provide a valid email', emailRef.current.value);
            return;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('Please write a valid email');
            return;
        }

        passwordReset(email)
            .then(() => {
                alert('Please check your email');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="container-lg">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 items-center gap-10 justify-between my-16 lg:col-span-2 md:col-span-2">
                    <div className="lg:col-span-2 md:col-span-2">
                        <h2 className="text-4xl pb-8 ">
                            Hey there! <br /> Connect with response.
                        </h2>
                        <img className="" src={logo} alt="" />
                    </div>
                    <div className="lg:col-span-2 md:col-span-2">
                        <div className="bg-[#282435] rounded-lg md:px-10 p-6 m-3">
                            <h2 className="text-4xl pb-8 pt-4">Sign In</h2>
                            <form onSubmit={handleSignIn}>
                                <label htmlFor="email" className="block md:w-96 w-full pb-2 font-semibold">
                                    Your Email{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    ref={emailRef}
                                    required
                                    className="rounded-md w-full py-3 px-4 bg-[#302D3D] tracking-wider"
                                    placeholder="Enter email here.."
                                    autoComplete="email" // Added autocomplete attribute
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
                                            className="rounded-md w-full py-3 px-4 bg-[#302D3D] pr-12 tracking-wider"
                                            placeholder="Enter password here.."
                                            autoComplete="current-password" // Added autocomplete attribute
                                        />
                                        <span
                                            className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEye className="text-2xl" /> : <FaEyeSlash className="text-2xl" />}
                                        </span>
                                    </div>
                                </div>
                                <label className="label">
                                    <Link onClick={() => handleResetPassword()} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <button type="submit" className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md">
                                    Sign In
                                </button>
                            </form>

                            <div className="divider">OR</div>
                            {/* Google Authentication */}
                            <button onClick={handleSignInWithGoogle} type="submit" className="w-full flex items-center justify-center gap-3 py-3 border border-[#FD5631] hover:bg-[#fd3831]/40 rounded-md text-dark">
                                <FcGoogle className="text-2xl"></FcGoogle>Sign In with Google
                            </button>
                            <div className="">
                                <p className="pt-6">
                                    Don&#39;t have any account?{" "}
                                    <Link className="underline text-[#FD5631]" to={"/register"}>
                                        Register
                                    </Link>
                                </p>
                            </div>

                            {loginError && <p className="text-red-500 text-xl">{loginError}</p>}
                            {success && <p className="text-green-500 text-xl">{success}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

