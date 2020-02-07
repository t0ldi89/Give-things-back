import React, {Component,useState} from 'react';
import FourStepsHeader from './FourStepsHeader';
import FourStepsIcon from './FourStepsIcon';
import FourStepsBnt from './FourStepsBnt';


const FourSteps =()=>(
    <div className='fourSteps col-dsk-12'>
        <FourStepsHeader/>
        <FourStepsIcon/>
        <FourStepsBnt/>
    </div>
)

export default FourSteps