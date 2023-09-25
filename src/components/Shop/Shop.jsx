import { useEffect, useState } from "react";
import ShopDetails from "./ShopDetails";


const Shop = () => {
  const [phones, setPhones] = useState([]);
  useEffect(()=> {
    fetch("phones.json")
    .then(res => res.json())
    .then(data => setPhones(data))
  },[])
  console.log(phones);
    return (
        <div className="grid grid-cols-4 gap-6">
            {
                phones.map(phone => <ShopDetails key={Shop.id} phone={phone}></ShopDetails>)
            }
        </div>
    );
};

export default Shop;