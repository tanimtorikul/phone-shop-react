import React from "react";
import { Link } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const { image, id, phone_name, brand_name, rating, price } = phone;

  return (
    <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden mt-32">
      <div className="relative">
        <img src={image} alt={phone_name} className="w-full  object-cover" />
        <span className="absolute top-0 right-0 m-2 p-1 bg-yellow-500 text-white rounded-full">
          {rating}/5
        </span>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-semibold mb-2">{phone_name}</h2>
        <p className="text-gray-600 text-sm mb-2">{brand_name}</p>
        <p className="text-2xl font-semibold mb-2">${price}</p>
        <div className="card-actions mt-4">
        <Link to={`/phones/${id}`} style={{ display: 'block', width: '100%' }}>
  <button className="btn bg-gray-400 text-white w-full py-2">
    See Details
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default PhonesCard;
