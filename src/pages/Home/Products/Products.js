import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (
        <div>
            <div className="mt-5 w-75 mx-auto">
                < h1 className="text-center mt-4 mb-3" > Fetured Cameras</ h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products?.map(product =>
                            <div key={product._id} className="col">
                                <div className="card h-100">
                                    <img src={product.imgUrl} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title fw-bold">{product.productName}</h3>
                                        <p className="card-text" title="Click On Buy Now To See More">{product?.description?.slice(0, 300)}...</p>
                                        <p className="card-text fs-5">Brand: {product.brand}</p>
                                        <p className="card-text text-danger fw-bold fs-4">{product.price}</p>
                                    </div>
                                    <Link to={`/purchase/${product._id}`}><button className="btn btn-dark w-100">Buy Now</button></Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div >
        </div>
    );
};

export default Products;