import React, { Component } from 'react';
import User from './User';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({ loading, users }) =>  {
    // Replace state with props
    // Users will be passed in as props

    if(loading) {
        return <Spinner />
    } else{

        return (
            <div style={userStyle}>
                {
                    users.map(user => {
                        return <UserItem key={user.id} user={user} />
                    })
                }
            </div>
        )
    }

}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

// Setting props propsType
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users;