import React from 'react';

function LaptopItemBody({name,tag, phoneNumber}){
    return(
        <div className="laptop-item_body">
            <h2 className="name">{name}</h2>
            <pre className="spec">{tag}</pre>
            <h3 className="harga">Harga : {phoneNumber}</h3>
            
        </div>
    );
}

export default LaptopItemBody;