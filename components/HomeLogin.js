import React, {Component} from 'react';
import {
    Link,
  } from 'react-router-dom';

const HeaderLogin = () =>(
    <>
    <Link to='/login'style={{ textDecoration: 'none'}}>
    <div className='homeHeaderLogin'>Zaloguj</div>
    </Link>
    </>
)

export default HeaderLogin;