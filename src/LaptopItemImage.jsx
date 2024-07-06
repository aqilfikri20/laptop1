import React from 'react';
 
function LaptopItemImage({ imageU }) {
  console.log("LaptopItemImage - imageU:", imageU); 
 return (
   <div className="laptop-item__image">
     {imageU && <img src={imageU} alt="Laptop Image" style={{ maxWidth: '100%' }} />}
   </div>
 );
}
 
export default LaptopItemImage;