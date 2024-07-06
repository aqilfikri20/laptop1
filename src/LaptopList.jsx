import React from "react";
import LaptopItem from "./LaptopItem";
function LaptopList({ contacts = [], imageUrls = {}, onDelete }) {
  return (
    <div className="laptop-list">
      {contacts.map((contact) => (
        <LaptopItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          tag={contact.tag}
          phoneNumber={contact.phoneNumber}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default LaptopList;
