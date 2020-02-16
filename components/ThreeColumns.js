import React, {Component,useState} from 'react';
import ThreeColumnsComponent from './ThreeColumsComponent';
import FourSteps from './FourSteps';


const ThreeColumns = () =>(
    <section className='container' id='threeColumns'>
        <div className='container__row threeColumns'>
        <ThreeColumnsComponent/>
        <FourSteps/>
        </div>
        
    </section>
   
)


export default ThreeColumns