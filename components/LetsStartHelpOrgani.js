import React, {Component} from 'react';
import {
    Link,
  } from 'react-router-dom';


const LetsStartHelpOrgani = ()=>(
    <div className='getItems'>
        <Link to='/login'style={{ textDecoration: 'none'}}>
            Zorganizuj zbiórke
        </Link>
    </div>
)

export default LetsStartHelpOrgani