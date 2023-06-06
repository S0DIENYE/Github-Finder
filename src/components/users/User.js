import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = (props) => {
  
  const routeParams = useParams();
  
  useEffect(() => {
    // this.props.getUser(this.props.match.params.login)
    // console.log(routeParams);
    // props.getUser(routeParams.login)
  })
  /*
    Sample of useEffect
    const [properties, setPropertiesMapFunc] = useState(new Map());
useEffect(()=>
{
    let mapNum = Number(props.match.params.id);
    setPropertiesMapFunc(mapNum === 1 ?propertiesMap1 : propertiesMap2);
}, [properties]);
  */


  return (
    <div>User</div>
  )
}

export default User;