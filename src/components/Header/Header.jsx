import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-blue-500 shadow-lg rounded-lg py-4 px-6 flex justify-between items-center">
      <div className="flex-1">
        <a className="text-white text-2xl font-semibold">PhoneShop</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li className="text-white hover:underline">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="text-white hover:underline">
            <NavLink to="/shop" activeClassName="active">
              Shop
            </NavLink>
          </li>
          <li className="text-white hover:underline">
            <NavLink to="/favorites" activeClassName="active">
              Favorites
            </NavLink>
          </li>
          <li className="text-white hover:underline">
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
