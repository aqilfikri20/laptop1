import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from './RegisterInput';
import { register } from '../utils/api';
 
function RegisterPage() {
  const navigate = useNavigate();
 
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <section className='register-page'>
      <h2>Silahkan Daftar Disini</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>Kembali ke <Link to="/">Login</Link></p>
    </section>
  )
}
 
export default RegisterPage;