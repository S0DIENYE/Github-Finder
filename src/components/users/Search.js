import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    // Initilaize github context
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (text === '') {
            alertContext.setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text)
            let res;
            res = await githubContext.invalidQuery(text);
            res = res.data.total_count;

            var getUsersLength = setInterval(() => {
                if(res <= 0) alertContext.setAlert('Please enter a valid username', 'light');
            }, 100);
            
            // After 5 seconds, cancel the interval
            setTimeout(() => {
                clearInterval(getUsersLength);
            }, 4000);
            
            setText('');
        }
    }

    const onChange = (e) => setText(e.target.value);

    return (

        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search Users..." value={text}
                    onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>

            {
                githubContext.users.length > 0 && <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>
            }
        </div>
    )
}

export default Search;