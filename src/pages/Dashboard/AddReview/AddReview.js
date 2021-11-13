import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    console.log(user);
    const onSubmit = data => {
        console.log(data);
        axios.post('https://cameraz.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${day}.${month}.${year}`;
    return (
        <div>
            <div className="text-center">
                <h1>Please Write A <span className="fw-bolder">Review</span></h1>
                <p>It Helps Us ❤</p>
            </div>
            <div className="w-75 mx-auto mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="form-control" hidden {...register("date")} id="floatingInput2" placeholder="Name" defaultValue={fullDate} />
                    <div className="form-floating mb-3">
                        <input type="name" className="form-control"  {...register("name")} id="floatingInput2" placeholder="Name" defaultValue={user.displayName} />
                        <label htmlFor="floatingInput2">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" {...register("email")} id="floatingInput" placeholder="name@example.com" defaultValue={user.email} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control mb-3" {...register("reviewMessage")} id="floatingTextarea2" style={{ height: "100px" }} placeholder="Write A Review"></textarea>
                        <label htmlFor="floatingTextarea2">Write A Review</label>
                    </div>
                    <div className="form-floating">
                        <input className="form-control" type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating 1-5" id="floatingTextarea2"></input>
                        <label htmlFor="floatingTextarea2">Rating 1-5</label>
                    </div>
                    <input className="btn btn-dark mt-2" type="submit" />
                </form >
            </div >
        </div >
    );
};

export default AddReview;