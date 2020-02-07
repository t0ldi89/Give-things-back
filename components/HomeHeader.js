import React, {Component} from 'react';
import HeaderHomeLogin from './HomeHeaderLogin';
import HeaderNav from './HeaderNav';
import LetsStartWorld from './LetsStartWord';
import LetsStartHelpItems from './LetsStartHelpItems';
import LetsStartHelpOrgani from './LetsStartHelpOrgani';

const HomeHeader = () =>(
<header className='container'>
    <div className='container__row homeHeader'>
    <div className='col-dsk-5 homeHeaderPicture'></div>
    <div className='col-dsk-6 homeHeaderNavi'>
    <HeaderHomeLogin />
    <HeaderNav />
    <div className='letsStartHelp'>
    <LetsStartWorld/>
    <img className='decoration' src='assets/Decoration.svg'></img>
        <div className='letsStartHelpBnt'>
        <LetsStartHelpItems/>
        <LetsStartHelpOrgani/>
        </div>
    </div>
    </div>
    </div>
</header>
);




export default HomeHeader