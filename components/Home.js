import React, {Component
,useState} from 'react';
import HomeHeader from './HomeHeader';
import ThreeColumns from './ThreeColumns';
import AboutUs from './AboutUs';
import ContactAndFooter from './ContactAndFooter';
import WhoWeHelp from './WHoWeHelp';


const Home = ()=> (
    <>
<HomeHeader />
<ThreeColumns/>
<AboutUs/>
<WhoWeHelp/>
<ContactAndFooter/>
</>
);


export default Home;