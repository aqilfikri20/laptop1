// AddPage.js
import React from 'react';
import { addContact } from '../utils/api';
import LaptopInput from './LaptopInput';
import { useNavigate } from 'react-router-dom';
import { LocaleConsumer } from '../utils/LocaleContext';

function AddPage({ updateImageUrl }) {
  const navigate = useNavigate();
 
  async function onAddContactHandler(contact) {
    await addContact(contact);
    if (contact.imageUrl) {
      updateImageUrl(contact.id, contact.imageUrl);}
    navigate('/');
  }

  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <section className='add-page'>
            <h2>{locale === 'id' ? 'Tambah Laptop' : 'Add Laptop'}</h2>
            <LaptopInput addContact={onAddContactHandler} updateImageUrl={updateImageUrl}/>
          </section>
        )
      }
    </LocaleConsumer>
  );
}

export default AddPage;
