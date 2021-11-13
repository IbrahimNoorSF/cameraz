import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [email, setEmail] = useState('');
    const onSubmit = data => {
        setEmail(data.email);
        console.log(data)
        const user = { email };
        fetch('https://cameraz.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Admin Made Successful')
                    reset();
                }
                else {
                    alert('Admin Made Failed')
                    reset();
                }
            })
    }

    return (
        <div className="w-75 mx-auto mt-3">
            <h1 className="text-center mb-4">Make <span className="fw-bolder">Admin</span></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control"  {...register("email")} id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <select className="form-select" defaultValue="Role" {...register("role")} required>
                    <option disabled>Role</option>
                    <option value="Admin">Admin</option>
                </select>
                <input className="btn btn-dark mt-2" type="submit" />
            </form >
        </div>
    );
};
export default MakeAdmin;