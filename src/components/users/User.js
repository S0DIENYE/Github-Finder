import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = (props) => {
  
  const routeParams = useParams();
  
  useEffect(() => {
    // props.getUser(props.match.params.login)
    // console.log(routeParams);
    props.getUser(routeParams.login)
    console.log(props.user);
    // props.getUser(routeParams.login)
  }, [])
  /*
    Sample of useEffect
    const [properties, setPropertiesMapFunc] = useState(new Map());
useEffect(()=>
{
    let mapNum = Number(props.match.params.id);
    setPropertiesMapFunc(mapNum === 1 ?propertiesMap1 : propertiesMap2);
}, [properties]);
  */
 const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    followers,
    following,
    public_repos,
    public_gist
 } = props.user


  return (
    <div>User</div>
  )
}

export default User;