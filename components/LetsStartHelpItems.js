import React, {Component} from 'react';
import {
    Link,
  } from 'react-router-dom';


const LetsStartHelpItems = ()=>(
    <div className='getItems'>
        <Link to='/login'style={{ textDecoration: 'none'}}>
            Oddaj rzeczy
        </Link>
    </div>
)

export default LetsStartHelpItems