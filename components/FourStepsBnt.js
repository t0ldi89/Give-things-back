import React, {Component} from 'react';
import {
    Link,
  } from 'react-router-dom';


const FourStepsBnt = ()=>(
    <div className='getItemBnt'>
        <div className='getItem'>
        <Link to='/login'style={{ textDecoration: 'none'}}>
        Oddaj rzeczy
    </Link>
        </div>
</div>
)

export default FourStepsBnt