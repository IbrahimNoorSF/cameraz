import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://cameraz.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `https://cameraz.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Service Deleted successfully')
                        const remaining = products.filter(products => products._id !==
                            id);
                        setProducts(remaining);
                    }
                });
        }
    }
    return (
        <div>
            <div className="mt-5 w-75 mx-auto">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product =>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={product.imgUrl} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title fw-bold">{product.productName}</h3>
                                        <p className="card-text" title="Click On Buy Now To See More">{product?.description?.slice(0, 300)}...</p>
                                        <p className="card-text fs-5">Brand: {product.brand}</p>
                                        <p className="card-text text-danger fw-bold fs-4">{product.price}</p>
                                    </div>
                                    <button className="btn btn-dark w-100" onClick={() => handleDelete(product._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div >
        </div>
    );
};

export default ManageProducts;