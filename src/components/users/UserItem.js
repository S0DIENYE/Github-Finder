import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const UserItem = () => {
    const githubContext = useContext(GithubContext);
    const { user: { login, avatar_url, html_url } } = githubContext;

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

export default UserItem;