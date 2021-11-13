import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleConfirmBooking = id => {
        const confirmBooking = { status: "Confirmed" };

        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'appication/json'
            },
            body: JSON.stringify(confirmBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modification > 0) {
                    alert('Service Updated Successfully')
                }
                window.location.reload();
            })
    }
    // const handleShippedBooking = id => {
    //     const confirmBooking = { status: "Shipped" };

    //     const url = `http://localhost:5000/orders/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'appication/json'
    //         },
    //         body: JSON.stringify(confirmBooking)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modification > 0) {
    //                 alert('Service Updated Successfully')
    //             }
    //             window.location.reload();
    //         })
    // }
    const HandleDelete = id => {
        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Service Deleted successfully')
                        const remaining = orders.filter(myOrders => myOrders._id !==
                            id);
                        setOrders(remaining);
                    }
                });
        }
    }
    console.log(orders);
    return (
        <div>
            <div className="text-center">
                <h1>Your <span className="fw-bolder">Orders</span></h1>
                <small>Orders Found: <span className="fw-bolder">{orders.length}</span></small>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                {
                    orders.map(myOrder =>
                        <div className="col" key={myOrder.productId}>
                            <div className="card h-100">
                                <img src={myOrder.productImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title fw-bold">{myOrder.productName}</h3>
                                    <p className="card-text fs-5">Product Id: {myOrder.productId}</p>
                                    <p>Status: <span className="p-2 text-black border border-1 rounded">{myOrder.status}</span></p>
                                    <button className="btn btn-success me-2" onClick={() => handleConfirmBooking(myOrder._id)}>Confirm</button>
                                    <button className="btn btn-danger" onClick={() => HandleDelete(myOrder._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;