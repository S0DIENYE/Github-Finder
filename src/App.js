import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer/Footer';
import Alert from './components/layout/Alert';
import Loader from './components/Loader/Loader';


// Context States
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';
import './style.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className='App'>
          <Navbar title=' Github Finder' icon='bi-github' />

          <div id='finder-body'>
          <div className='container'  style={containerStyle}>
            <Alert />

            {/* React router */}
            <Routes>
              <Route path='/' element={ <Home /> } />

              <Route path='/about' element={<About />} />

              <Route path='/user/:login' element={<User />} />
              
              {/* <Route path='/contact' element={<Contact />} /> */}

              <Route element={<NotFound />} />

            </Routes>
          </div>
          </div>

          <Loader />
          
          <Footer />
        </div>
      </AlertState>
    </GithubState>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  verticalAlign: 'center'
}

export default App;