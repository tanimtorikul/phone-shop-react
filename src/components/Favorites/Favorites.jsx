import React, { useEffect, useState } from "react";

import FavoriteList from "./FavoriteList";

const Favorites = () => {
  const [carts, setCarts] = useState([]);
  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      setCarts(cartItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  return (
    <div>
    {noFound ? (
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <p className="text-red-500 font-semibold">No data found</p>
      </div>
    ) : (
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-center text-gray-800">
            Total Cart Added: {carts.length}
          </h2>
        </div>
  
        <div className="grid grid-cols-2 gap-5">
          {carts.map((phone) => (
            <FavoriteList key={phone.id} phone={phone}></FavoriteList>
          ))}
        </div>
      </div>
    )}
  </div>
  
  );
};

export default Favorites;
