import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "./../../src/assets/reg.svg"
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser, changeProfile, verifyEmail, signWithGoogle } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(' ')
    const [registerError, setRegisterError] = useState(' ')
    const [success, setSuccess] = useState(' ')

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo_link = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const accepted = form.terms.checked;

        console.log(name, email, photo_link, password, accepted)

        //reset
        setRegisterError(' ');
        setSuccess(' ')

        //validation & Error handling
        if (password.length < 6) {
            setRegisterError('password should be at least 6 character')
            return;
        }
        //when you are set final security -  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password minimum 1 character')
            return;
        }
        else if (!accepted) {
            setRegisterError('please accept term and condition')
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log('user -> ', result.user)
                setSuccess('user created successfully')

                if (result.user) {
                    changeProfile(result.user, {
                        displayName: name,
                        photoURL: "https://www.facebook.com/photo/?fbid=7052547858185600&set=a.109511789155943"
                    })
                        .then(() => {
                            console.log('profile update')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Registration done",
                                showConfirmButton: false,
                                timer: 1500
                            });

                            verifyEmail(result.user)
                                .then(() => {
                                    let timerInterval;
                                    Swal.fire({
                                        title: "Check Inbox!",
                                        html: "Please Verify Your email Address",
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: () => {
                                            Swal.showLoading();
                                            const timer = Swal.getPopup().querySelector("b");
                                            timerInterval = setInterval(() => {
                                                timer.textContent = `${Swal.getTimerLeft()}`;
                                            }, 100);
                                        },
                                        willClose: () => {
                                            clearInterval(timerInterval);
                                        }
                                    }).then((result) => {
                                        /* Read more about handling dismissals below */
                                        if (result.dismiss === Swal.DismissReason.timer) {
                                            console.log("I was closed by the timer");
                                        }
                                    });
                                })

                        })
                        .catch((error) => {
                            console.error(error.message)
                        });
                }
                else {
                    console.error("usage object is undefined")
                }
            })
            .catch(error => {
                console.log(error.message)
                setRegisterError(error.message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })
    }

    const handleRegisterWithGoogle = () => {
        signWithGoogle()
            .then((result) => {
                console.log('google access-> ', result)
            })
            .catch((error) => {
                console.log(error)
                console.log(error.message)
                setRegisterError(error.message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })
    }

    return (
        <div>
            <div className="container-lg">
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center gap-10 justify-between my-10  lg:col-span-2 md:col-span-2">

                    <div className=" lg:col-span-2 md:col-span-2">
                        <div>
                            <h2 className="text-4xl pb-8 ">
                                Create Your Profile
                            </h2>
                            <h1 className="text-bold text-2xl">
                                Start Your Journey.
                            </h1>
                        </div>
                        <img className="" src={logo} alt="" />
                    </div>


                    <div className="flex h-full justify-center">
                        <div className="divider divider-horizontal"></div>
                    </div>


                    <div className=" lg:col-span-2 md:col-span-2">
                        <div className="bg-[#282435] rounded-lg md:px-10 p-6 m-3">

                            <h2 className="text-4xl pb-8 pt-5">Register</h2>

                            <form onSubmit={handleRegister}>
                                {/* NAME */}
                                <label htmlFor="email" className="block md:w-96 w-full pb-2 font-semibold">
                                    Your Name{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className=" rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                    placeholder="Name.."
                                />


                                {/* PHOTO-URL */}
                                <label htmlFor="photo" className="block md:w-96 w-full pt-8 pb-2 font-semibold">
                                    Photo URL{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    required
                                    className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                    placeholder="Enter Photo link.."
                                />


                                {/* EMAIL */}
                                <label htmlFor="email" className="block md:w-96 w-full pt-8 pb-2 font-semibold">
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



                                {/* PASSWORD */}
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

                                <div className="pt-8">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-2" htmlFor="terms">Accept term & Condition</label>
                                </div>

                                <button type="submit" className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md">
                                    Register In
                                </button>

                            </form>
                            {
                                registerError && <p className="text-red-500">{registerError}</p>
                            }
                            {
                                success && <p className="text-green-500">{success}</p>
                            }
                            <div className="divider">OR</div>


                            {/* Google Authentication */}
                            <button onClick={handleRegisterWithGoogle} type="submit" className="w-full flex items-center justify-center gap-3 py-3 border border-[#FD5631] hover:bg-[#fd3831]/40 rounded-md text-dark"                          >
                                <FcGoogle className="text-2xl"></FcGoogle>Register In with Google</button>
                            <div className="">
                                <p className=" pt-6">
                                    Already have any account?{" "}
                                    <Link className="underline text-[#FD5631]"
                                        to={"/login"}>
                                        Login
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

export default Register;