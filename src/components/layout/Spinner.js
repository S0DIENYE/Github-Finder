import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () =>  <Fragment>
        <img src={spinner}  alt="loading.."  style={{ width: '250px', margin: 'auto', display: 'block' }} />
    </Fragment>

export default Spinner;