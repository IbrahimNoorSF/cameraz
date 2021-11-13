import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-meadow-69142.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    console.log(reviews);
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center mb-3 mt-5">R<span className="fw-bolder">e</span>v<span className="fw-bolder">i</span>e<span className="fw-bolder">w</span>s</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => <div key={review._id} class="col">
                        <div class="card text-center me-2 h-100">
                            <div class="card-header bg-white" >
                                From: <span className="fw-bold fs-4">{review.name}</span>
                            </div>
                            <div class="card-body">
                                <h5 class="card-text"><span className="fw-bold fs-2">{review.reviewMessage}</span></h5>
                                <p class="card-text">Email: <span className="fw-bolder">{review.email}</span></p>
                                <p class="card-title">Rating: <i class="fas fa-star"></i><span className="fw-bolder">{review.rating}</span></p>
                            </div>
                            <div class="card-footer bg-white">
                                Rated On: <span className="fw-bolder">{review.date}</span>
                            </div>
                        </div>
                    </div>)
                }
            </div >
        </div >
    );
};

export default Reviews;