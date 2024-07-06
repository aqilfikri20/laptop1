import React from 'react';
import LaptopItemBody from './LaptopItemBody';

import DeleteButton from './DeleteButton';

function LaptopItem({ name, tag, phoneNumber, id, onDelete, imageUrl }) {
  return (
    <div className="laptop-item">
        <img src='https://res.cloudinary.com/aqilfikri20/image/upload/v1720242817/z5b09atha3jcj2tz7ewg.png' alt={name} />
      <LaptopItemBody name={name} tag={tag} phoneNumber={phoneNumber} />
     

      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default LaptopItem;
