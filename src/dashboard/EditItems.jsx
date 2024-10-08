import { useLoaderData, useNavigate } from "react-router-dom";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { BsUpload } from "react-icons/bs";
import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthProvider";



const EditItems = () => {
    const carAddItems = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, brand, location, price, mileage, fuelType, photoLink, description } = carAddItems;
    const [uploadFile, setUploadFile] = useState();
    const [uploadedImage, setUploadImage] = useState(photoLink);
    const navigate = useNavigate();



    const handleChange = (e) => {
        setUploadFile(URL.createObjectURL(e.target.files[0]));
        setUploadImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit click');

        const form = e.target;
        const brand = form.brand.value;
        const location = form.location.value;
        const mileage = form.mileage.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo_link = form.file.value;

        console.log('Photo Link - ', photo_link)


        const vehicles_info = {
            name: title,
            brand,
            location,
            mileage,
            type,
            price,
            photoLink: uploadedImage,
            photo_link,
            description,
            email: user?.email // Include user email
        };


        console.log('vehicles info -> ', vehicles_info);


        axios.post('http://localhost:5500/bookings', vehicles_info, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.insertedId) {
                    if (user?.email) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "customized done & adding data",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/cart');
                    }
                    else {
                        navigate('/login')
                    }
                }
            })
            .catch(error => {
                console.error('There was an error', error.message);
            });
    };

    return (
        <div className="container-lg">
            <div className="pb-10">

                <div className="flex border-b mb-10 justify-center">
                    {/* <h2 className="text-3xl font-semibold tracking-wider pb-6">Customize Your Vehicle</h2> */}

                    <div className="relative w-full h-52 object-fill">
                        <img src="https://i.ibb.co/0sQx5Yg/carblack.jpg" className="w-full h-full rounded-xl object-cover" />
                        <div className="absolute inset-2 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]">
                            <h2 className="text-4xl font-semibold tracking-wider border-b">Customize Your Vehicle</h2>
                        </div>
                    </div>
                </div>



                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6">
                        <div className="pb-6">
                            <div className="bg-[#282435] p-2 rounded-lg items-center h-96 w-full">
                                {uploadFile ? (
                                    <img src={uploadFile} className="object-cover border-0 rounded-lg w-full h-full mx-auto my-auto mb-0" alt="Uploaded" />
                                ) : (
                                    <div className="flex h-full justify-center items-center">
                                        <BsUpload className="text-6xl" />
                                    </div>
                                )}
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="files"
                                    className="block cursor-pointer bg-[#302D3D] w-full rounded-lg py-3 text-center font-semibold"
                                >
                                    Upload Photo <HiOutlineArrowUpTray className="inline text-lg ms-2 font-semibold" />
                                </label>
                                <input
                                    type="file"
                                    name="file"
                                    onChange={handleChange}
                                    id="files"
                                    className="bg-[#302D3D] hidden w-full rounded-lg py-3 text-center font-semibold"
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="bg-[#282435] rounded-lg md:px-10 p-6">
                                {user && <p className="ps-1 ring rounded-lg p-2 mb-2 w-2/6">Email id : {user?.email}</p>}
                                <label htmlFor="name" className="block md:w-96 w-full pb-2 font-semibold">
                                    Car Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                    placeholder="Enter Car name"
                                    defaultValue={title}
                                />

                                <label htmlFor="brand" className="block w-full pb-2 pt-8 font-semibold">
                                    Brand name <span className="text-red-600">*</span>
                                </label>
                                <select name="brand" defaultValue={brand} className="rounded-md text-white/40 w-full py-3 px-4 bg-[#302D3D]" id="brand-select">
                                    <option className="rounded-md" value="brands">Choose your brand</option>
                                    <option className="rounded-md" value="toyota">Toyota</option>
                                    <option className="rounded-md" value="ford">Ford</option>
                                    <option className="rounded-md" value="bmw">BMW</option>
                                    <option className="rounded-md" value="mercedes">Mercedes-Benz</option>
                                    <option className="rounded-md" value="tesla">Tesla</option>
                                    <option className="rounded-md" value="honda">Honda</option>
                                </select>

                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="location" className="block w-full pb-2 pt-8 font-semibold">
                                            Location <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            required
                                            className="rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                            placeholder="Enter location"
                                            defaultValue={location}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="mileage" className="block w-full pb-2 pt-8 font-semibold">
                                            Mileage <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="mileage"
                                            required
                                            className="rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                            placeholder="Enter mileage"
                                            defaultValue={mileage}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="type" className="block w-full pb-2 pt-8 font-semibold">
                                            Fuel-Type <span className="text-red-600">*</span>
                                        </label>
                                        <select name="type" defaultValue={fuelType} className="rounded-md text-white/40 w-full py-3 px-4 bg-[#302D3D]" id="fuel-type-select">
                                            <option className="rounded-md" value="fuel-type">Choose fuel type</option>
                                            <option className="rounded-md" value="sedan">Sedan</option>
                                            <option className="rounded-md" value="mvp">MVP</option>
                                            <option className="rounded-md" value="suv">SUV</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="price" className="block w-full pb-2 pt-8 font-semibold">
                                            Price <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            required
                                            className="rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                            placeholder="Enter price"
                                            defaultValue={price}
                                        />
                                    </div>
                                </div>

                                <label htmlFor="description" className="block md:w-96 w-full pb-2 pt-8 font-semibold">
                                    Details <span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    cols="30"
                                    rows="8"
                                    required
                                    className="rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                    placeholder="Car details..."
                                    defaultValue={description}
                                />

                                <button type="submit" className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md">
                                    <span>Customize</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditItems;
