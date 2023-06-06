import React from 'react';

const Alert = ({ alert }) => {
  return (
    // condition (if alert !== null)
    alert !== null && (
        <div className={`alert alert-${alert.type}`} style={{ borderRadius: '7px' }} >
            <i className="bi-info-circle"  /> {alert.msg}
        </div>
    )
  )
}


export default Alert