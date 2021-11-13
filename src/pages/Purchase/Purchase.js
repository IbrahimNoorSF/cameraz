import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import './Purchase.css';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';

const Purchase = () => {
    const { product } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('');
    const [signleProduct, setSingleProduct] = useState({});
    // const [error, setError] = useState('');
    const { user } = useAuth();

    const location = useLocation();
    const history = useHistory();
    // redirecting
    const redirect_url = location?.state?.from || '/';
    useEffect(() => {
        fetch('https://cameraz.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, []);
    useEffect(() => {
        const productFound = productDetails?.find(foundProduct => foundProduct._id === product)
        setSingleProduct(productFound);
    }, [productDetails])

    const onSubmit = data => {
        console.log(data);
        axios.post('https://cameraz.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed Successfully');
                    history.push(redirect_url);
                    reset();
                }
            }).catch(error => {
                setError(error);
            })
    }
    console.log(signleProduct);
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="container mt-5 mb-5">
                    <div className="d-md-flex">
                        <div className="container ms-md-5">
                            <h1>{signleProduct?.productName}</h1>
                            <p>Product Id: <span className="fw-bold">{signleProduct?._id}</span></p>
                            <p>Brand: {signleProduct?.brand}</p>
                            <p className="pe-5">{signleProduct?.description}</p>
                            <p className="fw-bold">Price: <span className="text-danger">{signleProduct?.price}</span></p>
                        </div>
                        <div>
                            <img className="rounded img img-fluid" src={signleProduct?.imgUrl} alt="" />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-center mb-3"
                        >You Are Just 1 Step Away From Your <span className="fw-bolder">Camera</span>!</h1>
                        <input type="hidden" {...register("status")} defaultValue="Pending" />
                        <input className="form-control mb-3" readOnly type="text" {...register("productImg")} defaultValue={signleProduct?.imgUrl} />
                        <div className="form-floating mb-3">
                            <input className="form-control mb-3" readOnly type="text" id="product-id" {...register("productId")} defaultValue={signleProduct?._id} placeholder="Product Id" />
                            <label htmlFor="product-id">Product Id</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control mb-3" readOnly id="product-name" type="text" {...register("productName")} defaultValue={signleProduct?.productName} placeholder="Product Name" />
                            <label htmlFor="product-name">Product Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control mb-3" readOnly id="product-price" type="text" {...register("productPrice")} defaultValue={signleProduct?.price} placeholder="Product Price" />
                            <label htmlFor="product-price">Product Price</label>
                        </div>
                        <input type="text" {...register("userName")} defaultValue={user.displayName} className="form-control mb-3" placeholder="Your Name" />
                        <input type="email" {...register("userEmail")} defaultValue={user.email} className="form-control mb-3" placeholder="Your Email" />
                        <div className="form-floating mb-3">
                            <input type="number" {...register("userPhone")} className="form-control" id="floatingNumber" placeholder="Your Phone Number" required />
                            <label htmlFor="floatingNumber">Your Phone Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea style={{ height: "100px" }} type="text" {...register("userAddress")} className="form-control" id="floatingAddress" placeholder="Address" required />
                            <label htmlFor="floatingAddress">Address</label>
                        </div>
                        <p className="text-danger">{error}</p>
                        <button className="btn btn-dark btn-lg">Submit</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;