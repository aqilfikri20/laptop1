import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavigationAdmin from './admin/NavigationAdmin';
import HomePageAdmin from './admin/HomePageAdmin';
import AddPage from './admin/AddPage';
import LoginPage from './admin/LoginPage';
import RegisterPage from './admin/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/api';
import { LocaleProvider } from './utils/LocaleContext';

class LaptopApp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,

      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === 'id' ? 'en' : 'id'
              }
            }
          })
        }
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
 
  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        
      };
    });
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }
 
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }
    
    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
        <div className='contact-app'>
          <header className='contact-app__header'>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
        </LocaleProvider>
      );
    }

  return (
    <LocaleProvider value={this.state.localeContext}>
    <div className="laptop-app">
      <header className='laptop-app__header'>
      <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Spesifikasi Laptop' : 'Specification laptop App'}</h1>
        <NavigationAdmin logout={this.onLogout} name={this.state.authedUser.name} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageAdmin />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </main>
    </div>
    </LocaleProvider>
  );
  }
}

export default LaptopApp;