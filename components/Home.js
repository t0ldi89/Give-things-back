import React, {Component
,useState} from 'react';
import HomeHeader from './HomeHeader';
import ThreeColumns from './ThreeColumns';
import AboutUs from './AboutUs';
import ContactAndFooter from './ContactAndFooter';


const Home = ()=> (
    <>
<HomeHeader />
<ThreeColumns/>
<AboutUs/>
<ContactAndFooter/>
</>
);


export default Home;