import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  // get is a method to make a request e.g fetch
  // axios deal with promises. so just like dealing with the fetch method.
  // async await could also be used with the axios method
  // parse the data from api into app state
  // while data is being fetched loading == true. as soon as it's loaded, loaded == true

  //*** App level state
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }


  //*** Fetch users method
  // async componentDidMount() {
  //   // change STATE in a class based component with setState method
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //               ${process.env.REACT_APP_GTIHUB_CLIENT_ID}&client_secret=
  //               ${process.env.REACT_APP_GTIHUB_CLIENT_SECRET}`);

  //   // Data loaded
  //   this.setState({ users: res.data, loading: false });

  // }


  //*** Search Github users method
  searchUsers = async (text) => {

    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GTIHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GTIHUB_CLIENT_SECRET}`);

    // Data loaded
    this.setState({ users: res.data.items, loading: false });

  }

  //*** View user profile
  getUser = async (username) => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=
    ${process.env.REACT_APP_GTIHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GTIHUB_CLIENT_SECRET}`);

    // Data loaded
    this.setState({ user: res.data, loading: false });
  }

  // Get users repos
  getUsersRepos = async (username) => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GTIHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GTIHUB_CLIENT_SECRET}`);

    // Data loaded
    this.setState({ repos: res.data, loading: false });
  }

  
  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  // Set alert
  setAlert = (msg, type) => {
    // Change alert in state. pass msg and type into alert object
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 1500)

  }


  render() {

    const { users, user, repos, loading, alert } = this.state;

    return (
      <div className='App'>
        <Navbar title=' Github Finder' icon='bi-github' />
        <div className='container' style={containerStyle}>

          <Alert alert={alert} />

          {/* Implement react router */}
          <Routes>

            <Route path='/' element={
              <Fragment>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                  // conditional to show/hide clear btn
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />

                <Users loading={loading} users={users} />
              </Fragment>
            } />

            <Route path='/about' element={<About />}></Route>

            <Route path='/user/:login' element={
              <Fragment>
                {/* Passing in user props pulled out from state */}
                <User {...this.props} getUser={this.getUser} 
                  getUsersRepos={this.getUsersRepos}
                  user={user} repos={repos} loading={loading} />
              </Fragment>
            }/>

          </Routes>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  verticalAlign: 'center'
}

export default App;