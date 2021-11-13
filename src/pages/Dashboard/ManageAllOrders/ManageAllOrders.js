import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const { user } = useAuth();
    console.log(user);
    useEffect(() => {
        fetch('https://enigmatic-meadow-69142.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleConfirmOrder = id => {
        const confirmedOrder = { status: "Confirmed" };
        console.log(confirmedOrder);
        const url = `https://enigmatic-meadow-69142.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(confirmedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modification > 0) {
                    alert('Confirmed Status Updated Successfully')
                }
                window.location.reload();
            })
    }
    const handleConfirmShipping = id => {
        const confirmedShipping = { status: "Shipped" };
        const url = `https://enigmatic-meadow-69142.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirmedShipping)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modification > 0) {
                    alert('Status Shipping Updated Successfully')
                }
                window.location.reload();
            })
    }
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
    return (
        <div className="table-orders">
            <h1 className="mt-5 text-center">All <span className="fw-bolder">Orders</span></h1>
            <div className="table-responsive">
                <table class="table table-hover table-bordered mt-5 ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <tbody key="order._id">
                            <tr>
                                <td>{user.displayName}</td>
                                <td>{order.userPhone}</td>
                                <td>{order.productId}</td>
                                <td>{order.productName}</td>
                                <td>{order.productPrice}</td>
                                <td>{order.status}</td>
                                <td>{order.status === "Confirmed" ? <button className="btn btn-dark" disabled>Confirmed</button> : <button className="btn btn-dark" onClick={() => handleConfirmOrder(order._id)}>Confirm</button>}</td>
                                <td>{order.status === "Shipped" ? <button className="btn btn-dark" disabled>Shipped</button> : <button className="btn btn-dark" onClick={() => handleConfirmShipping(order._id)}>Shipped</button>}</td>
                                <td><button className="btn btn-dark" onClick={() => handleDelete(order._id)}>Delete</button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;