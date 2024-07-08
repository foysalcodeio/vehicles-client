const CarInfoRaw = ({ booking, handleDelete, handleConfirm }) => {
    console.log('carInfoBooking ', booking)
    const {_id, name, brand, type, price, photoLink, status} = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photoLink}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">brand id : {_id}</div>
                    </div>
                </div>
            </td>
            <td>
                {brand}
                <br />
                <span className="badge badge-ghost badge-sm">Company Dealer </span>
            </td>
            <td>{type}</td>
            <td>{price}</td>
            <td>
                {
                    status === 'confirm' ? 
                    <button className="btn btn-primary text-bold btn-sm">Confirmed</button>
                    :
                    <button onClick={() => handleConfirm(_id)} className="btn btn-warning btn-sm">Confirm</button>
                }
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default CarInfoRaw;