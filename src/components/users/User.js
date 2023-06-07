import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const User = (props) => {

  const { getUser, getUsersRepos, user, repos, loading } = props;

  const routeParams = useParams();

  useEffect(() => {
    // Send request to get user details
    getUser(routeParams.login)
    getUsersRepos(routeParams.login)

  }, [getUser, routeParams.login, getUsersRepos])

  console.log(repos);

  const {
    name,
    avatar_url,
    html_url,
    location,
    bio,
    blog,
    login,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;


  if (loading) return <Spinner />

  return (
    <Fragment>
      {/* Redirect back to home */}
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      <p>
        Hireable: {' '}
        {hireable ? <i className="bi bi-check text-success" /> : <i className="bi bi-x text-danger" />}
      </p>
      <div className="card grid-2">
        <div className='all-center'>
          <img src={avatar_url} className='round-img'
            alt='' style={{ width: '150px' }} />

          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>

        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}

          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>

          <ul>
            <li>
              {
                login && <Fragment>
                  <strong> Username: {login}</strong>
                </Fragment>
              }

              {
                company && <Fragment>
                  <strong>, Company: {company}</strong>
                </Fragment>
              }

              {
                blog && <Fragment>
                  <strong>, Website: {blog}</strong>
                </Fragment>
              }

            </li>
          </ul>
        </div>

      </div>

      <div className="card text-center">
          <div className="badge badge-light">Followers: {followers}</div>
          <div className="badge badge-primary">Following: {following}</div>
          <div className="badge badge-success">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  )
}

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
}

export default User;