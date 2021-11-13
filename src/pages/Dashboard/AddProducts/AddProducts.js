import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    console.log(res);
                    reset();
                }
            })
    }
    return (
        <div className="w-75 mx-auto mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center">Add A New <span className="fw-bolder">Product</span></h1>
                <div className="form-floating mb-3">
                    <input type="text" {...register("productName")} className="form-control" id="floatingInput" placeholder="Product Name" required />
                    <label htmlFor="floatingInput">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea type="text" {...register("description")} style={{ height: "100px" }} className="form-control" id="floatingDescription" placeholder="Description" required />
                    <label htmlFor="floatingDescription">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" {...register("brand")} className="form-control" id="floatingBrand" placeholder="Brand" required />
                    <label htmlFor="floatingPrice">Brand</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" {...register("price")} className="form-control" id="floatingPrice" placeholder="Price" required defaultValue="$" />
                    <label htmlFor="floatingPrice">Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="url" {...register("imgUrl")} className="form-control" id="floatingImg	" placeholder="Image" required />
                    <label htmlFor="floatingImg">Image Url</label>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
                <Link to="/"><button className="btn btn-dark ms-1">Cancel</button></Link>
            </form>
        </div>
    );
};

export default AddProducts;