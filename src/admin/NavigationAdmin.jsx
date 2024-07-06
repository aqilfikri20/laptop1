import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { LocaleConsumer } from '../utils/LocaleContext';

function NavigationAdmin({logout, name}) {
  return (
    <LocaleConsumer>
      {
        ({locale, toggleLocale}) => {
          return(
            <nav className="navigation">
            
            <ul className='ul1'>       
            <li><Link to="/">{locale === 'id' ? 'BERANDA' : 'HOME'}</Link></li>

            </ul>

            <ul className='ul2'>
            <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
            <li><Link to="/add"><FiPlusCircle className='add'/></Link></li>
            <li><button onClick={logout}>{name}<FiLogOut /></button></li>
            </ul>
          </nav>
          )
        }
      }
  </LocaleConsumer>
  );
}


export default NavigationAdmin;