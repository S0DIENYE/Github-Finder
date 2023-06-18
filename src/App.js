import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

// Context States
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <div className='App'>
          <Navbar title=' Github Finder' icon='bi-github' />

          <div className='container' style={containerStyle}>
            <Alert />

            {/* React router */}
            <Routes>
              <Route path='/' element={
                <Fragment>
                  <Search />

                  <Users />
                </Fragment>
              } />

              <Route path='/about' element={<About />}></Route>

              <Route path='/user/:login' element={<User />} />

            </Routes>
          </div>
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