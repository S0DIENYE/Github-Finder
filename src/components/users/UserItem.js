import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
    return (
        <div className="text-center" id='card'>
            <img src={avatar_url}
            alt="user-img" />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-md my-1' style={{ borderRadius: '7px' }}>
                    View Profile
                </Link>
            </div>
        </div>
    )
}

export default UserItem;