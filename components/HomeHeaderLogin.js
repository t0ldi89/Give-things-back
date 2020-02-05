import React, {Component} from 'react';
import HeaderLogin from './HomeLogin';
import HomeReg from './HomeReg';

const HeaderHomeLogin = () =>(
        <div className='homeHeaderLoginBnt'>
        <HomeReg />
        <HeaderLogin />
        </div>
)


export default HeaderHomeLogin;