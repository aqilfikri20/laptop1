import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
import { login } from '../utils/api';
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <h1>HALAMAN LOGIN</h1>
      <h3>Silakan masuk atau Daftar terlebih dahulu untuk melanjutkan  ...</h3>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? Masuk ke email user@gmail.com dan password 123456 atau bisa <Link to="/register">Daftar di sini.</Link></p>
    </section>
  );
  
}
 
export default LoginPage;