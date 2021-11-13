import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageMyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://enigmatic-meadow-69142.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `https://enigmatic-meadow-69142.herokuapp.com/orders/${id}`;
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
    const myOrders = orders.filter(myOrder => myOrder.userEmail === user.email);
    return (
        <div>
            <div className="text-center">
                <h1>Your <span className="fw-bolder">Orders</span></h1>
                <small>Orders Found: <span className="fw-bolder">{myOrders.length}</span></small>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                {
                    myOrders.map(myOrder =>
                        <div className="col" key={myOrder.productId}>
                            <div className="card h-100">
                                <img src={myOrder.productImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title fw-bold">{myOrder.productName}</h3>
                                    <p className="card-text fs-5">Product Id: {myOrder.productId}</p>
                                    <p>Status: <span className="p-2 rounded bg-success text-white">{myOrder.status}</span></p>
                                    <p>Price: <span className="fw-bolder">{myOrder.productPrice}</span></p>
                                    <button className="btn btn-danger btn-lg" onClick={() => handleDelete(myOrder._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageMyOrders;