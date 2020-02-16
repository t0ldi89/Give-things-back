import React, {Component} from 'react';
import HeaderLogin from './HomeLogin';
import HomeReg from './HomeReg';

const HeaderHomeLogin = () =>(
        <div className='homeHeaderLoginBnt'>
        <HeaderLogin />
        <HomeReg />
        </div>
)


export default HeaderHomeLogin;