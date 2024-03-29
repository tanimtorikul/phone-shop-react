import Swal from "sweetalert2";

const FavoriteList = ({ phone }) => {
  const { image, id, phone_name, brand_name, description, price } = phone;
  const handleAddToCart = () => {
    Swal.fire({
      title: "Thanks for your purchase!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="flex justify-center my-10">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        {/* Product Image */}
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="Product"
            className="h-full w-full object-cover rounded-xl rounded-r-none"
          />
        </div>

        {/* Product Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h6 className="mb-2 font-sans text-base font-semibold text-pink-500 uppercase tracking-wider">
              {brand_name}
            </h6>
            <h4 className="mb-2 font-sans text-2xl font-semibold text-blue-gray-900">
              {phone_name}
            </h4>
            <p className="mb-4 font-sans text-base font-normal text-gray-700">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-sans text-lg font-semibold text-gray-900">
                Price: ${price}
              </span>
            </div>
            <div className="py-4 flex gap-10">
              <button
                onClick={handleAddToCart}
                className="px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-400"
                type="button"
              >
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <button
                className="px-5 py-2 text-white bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none focus:ring focus:ring-red-400 flex items-center"
                type="button"
              >
                Remove
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
