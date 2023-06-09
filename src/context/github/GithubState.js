import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS,
    INVALID_QUERY
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        usersLength: null,
    }

    // dipatch type to our reducer
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users function
    const searchUsers = async (text) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GTIHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GTIHUB_CLIENT_SECRET}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })

        return res;
    }

    // Get User
    const getUser = async (username) => {
        setLoading()
    
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=
        ${process.env.REACT_APP_GTIHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GTIHUB_CLIENT_SECRET}`);
    
        dispatch({  type: GET_USERS,  payload: res.data })
    }

    // Get Repos
    const getUsersRepos = async (username) => {
        setLoading()
    
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GTIHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GTIHUB_CLIENT_SECRET}`);
    
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    };

    // Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // Set Loading
    const invalidQuery = async (username) => {
        const res = await searchUsers(username);
        dispatch({ type: INVALID_QUERY, payload: res.data.items.length });

        return res;
    };

    return <GithubContext.Provider
        // We set here (value) anything we want to pass available from github context to our entire app
        value={{
            users: state.users,
            usersLength: state.usersLength,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUsersRepos,
            invalidQuery,
        }} >

        {props.children}
    </GithubContext.Provider>
}

export default GithubState;