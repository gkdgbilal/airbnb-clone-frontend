import React from 'react';
import { urlFor } from '../sanity';

export default function Review({ review }) {
  return (
    <div className="review-box">
      <h1>{review.rating}</h1>
      <h5>{review.reviewDescription}</h5>
      <div className="review-author">
        <h3>{review.traveller.name}</h3>
        <img
          src={urlFor(review.traveller.image)
            .width(50)
            .height(50)
            .crop('focalpoint')}
        />
      </div>
    </div>
  );
}
