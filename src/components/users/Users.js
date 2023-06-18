import React, { useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

import './usersStyle.css';

const Users = () =>  {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    if(loading) {
        return <Spinner />
    } else{

        return (
            <div id="user-card" style={{ marginTop: '10px' }}>
                {
                    users.map(user => {
                        return <UserItem key={user.id} user={user} />
                    })
                }
            </div>
        )
    }

}

export default Users;