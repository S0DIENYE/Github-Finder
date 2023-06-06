import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    // taking out user from props then taking out specific items from user

    // const {login, avatar_url, html_url} = props.user

    return (
        <div className="card text-center">
            <img src={avatar_url}
            alt="" className="round-img" style={{ width: '60px' }}/>

            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-md my-1' style={{ borderRadius: '7px' }}>
                    View Profile
                </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem