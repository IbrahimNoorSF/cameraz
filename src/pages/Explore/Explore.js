import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://cameraz.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-5 w-75 mx-auto">
                < h1 className="text-center mt-4 mb-4" >Shop With <span className="fw-bolder">CameraZ</span></ h1>
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
                                    <Link to={`/purchase/${product._id}`}><button className="btn btn-dark w-100">Buy Now</button></Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Explore;