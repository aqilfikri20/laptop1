import React from "react"; 
import LaptopItem from '../LaptopItem';

function Gaming() {
 return (
   <div className="laptop-list">
     {
       laptops.map((laptop) => (
        <LaptopItem 
        key={laptop.id}
        id={laptop.id}
        {...laptop} />
      ))
    }
  </div>
);
}

export default Gaming;