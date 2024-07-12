import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adding = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const brand = form.brand.value;
        const location = form.location.value;
        const mileage = form.mileage.value;
        const type = form.type.value;
        const price = form.price.value;
        const desc = form.description.value;
        console.log(name, brand, location, mileage, type, price, desc)

        const newSellCar = { name, brand, location, mileage, type, price, desc }

        fetch(`http://localhost:5500/cars`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSellCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('car details we have received')
                }
            })
    }
    return (
        <div className="container-lg">
            <div className="pb-10">
                <div className="flex mb-10 justify-center">
                <div className="relative w-full h-52 object-cover">
                        <img src="https://static.wixstatic.com/media/0b918a_d6f4df7891de433d98dbb1e8d32c0369~mv2.jpg/v1/fill/w_556,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b-CZ20V03IX0002_1.jpg" className="w-full h-full rounded-xl object-cover" />
                        <div className="absolute inset-0 rounded-sm flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <h2 className="text-4xl font-semibold tracking-wider pb-6 pl-4 border-b">Sell Your Old Car</h2>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6">
                        <div className="pb-6">


                        </div>
                        <div className="col-span-2">
                            <div className="bg-[#282435] rounded-lg md:px-10 p-6">
                                <label htmlFor="name" className="block md:w-96 w-full pb-2 font-semibold">
                                    Car Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                    placeholder="Enter Car name"

                                />

                                <label htmlFor="brand" className="block w-full pb-2 pt-8 font-semibold">
                                    Brand name <span className="text-red-600">*</span>
                                </label>
                                <select name="brand" className="rounded-md text-white/40 w-full py-3 px-4 bg-[#302D3D]" id="brand-select">
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

                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="type" className="block w-full pb-2 pt-8 font-semibold">
                                            Fuel-Type <span className="text-red-600">*</span>
                                        </label>
                                        <select name="type" className="rounded-md text-white/40 w-full py-3 px-4 bg-[#302D3D]" id="fuel-type-select">
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

                                />

                                <button type="submit" className="w-full mt-8 py-3 bg-[#FD5631] hover:bg-[#fd3831] hover:shadow-md text-white rounded-md">
                                    <span>Sell</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Adding;
