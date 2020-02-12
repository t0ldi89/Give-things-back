import React, {Component} from 'react';
import { Link as LinkScroll } from 'react-scroll';

const options = {
    activeClass:"start-button",
    spy: true,
    smooth: true,
    duration: 1500
}

const HeaderNav =()=>(
<div className='homeNavList'>
<ul>
    <li>
    <LinkScroll to='start' to='/start' className='menu-button' {...options}>Start</LinkScroll>
    </li>
    <li>
    <LinkScroll to='threeColumns' className='menu-button'{...options}>O co chodzi?</LinkScroll>
    </li>
    <li>
    <LinkScroll to='aboutUs' className='menu-button' {...options}>O nas</LinkScroll>
    </li>
    <li>
    <LinkScroll to='whoWeHelp' className='menu-button' {...options}>Fundacja i organizacje</LinkScroll>
        </li>
    <li>
    <LinkScroll to='contact' className='menu-button' {...options}>Kontakt</LinkScroll>
    </li>
</ul>
</div>
)


export default HeaderNav;