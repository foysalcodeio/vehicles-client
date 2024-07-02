import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import axios from "axios";
import CarInfoRaw from "./CarInfoRaw";
import Swal from "sweetalert2";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]); // Initialize to an empty array

    const url = `http://localhost:5500/bookings?email=${user?.email}`;

    useEffect(() => {
        if (user?.email) {
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    setBookings(response.data);
                })
                .catch(error => {
                    console.error('Error fetching bookings:', error);
                });
        }
    }, [url, user?.email]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5500/bookings/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                Swal.fire({
                    title: "Are you sure?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.deletedCount > 0 || deletedCount == 1) {
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    }
                });
            })
            .catch(error => {
                console.error('Error deleting booking: ', error)
            })
    }


    const handleConfirm = (id) => {
        fetch(`http://localhost:5500/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data)
                if (data.modifiedCount == 1) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                }

            })
            .catch(error => {
                console.error('handle confirm section error', error.message)
            })
    }

    return (
        <div>
            <div className="container-lg pb-32 pt-10 bg-[#0c0518]">
                <h2 className="text-2xl font-semibold pb-16">My Cart: {bookings.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        {
                            bookings.length === 0 ? "" :
                                <>
                                    <thead>
                                        <tr className="border-b border-white/30">
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <th>Name</th>
                                            <th>Brand</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </>
                        }

                        <tbody>
                            {
                                bookings.length > 0 ?
                                    bookings.map((booking) => <CarInfoRaw
                                        id={booking._id}
                                        booking={booking}
                                        handleDelete={handleDelete}
                                        handleConfirm={handleConfirm}
                                    >
                                    </CarInfoRaw>) :
                                    <tr>
                                        <td colSpan="6">No booking found</td>
                                    </tr>
                            }


                        </tbody>

                        {/* tfoot */}
                        {
                            bookings.length === 0 ? "" :
                                <>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Brand</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                </>
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
