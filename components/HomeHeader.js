import React, {Component} from 'react';
import HeaderHomeLogin from './HomeHeaderLogin';
import HeaderNav from './HeaderNav';

const HomeHeader = () =>(
<header className='container'>
    <div className='container__row homeHeader'>
    <div className='col-dsk-5 homeHeaderPicture'></div>
    <div className='col-dsk-6 homeHeaderNavi'>
    <HeaderHomeLogin />
    <HeaderNav />
    </div>
    <div className='col-dsk-6'>
        
    </div>
    </div>
    
  
    


</header>
);




export default HomeHeader