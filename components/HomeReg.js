import React, {Component} from 'react';
import {
    Link,
  } from 'react-router-dom';

const HomeReg =()=>(
    <>
    <Link to='/registration'style={{ textDecoration: 'none'}}>
    <div className='homeHeaderLogin'>Zaloguj</div>
    </Link>
    </>
)

export default HomeReg