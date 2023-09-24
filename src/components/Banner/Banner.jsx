import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-24 rounded-lg relative h-[70vh] flex justify-center items-center bg-indigo-900">
        {/* Background Image */}
        <img
          src='phone.jpg' // Replace with your image URL
          alt="Mobile Shop Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
  
        {/* Content Container */}
        <div className="relative z-10 text-white py-24 px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Welcome to Gadget Galaxy
          </h1>
          <p className="text-xl lg:text-2xl mb-8">
            Explore the Latest and Greatest Mobile Devices
          </p>
          <Link
            to="/shop"
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
};

export default Banner;