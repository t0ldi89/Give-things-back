import React, {Component} from 'react';

const FourStepsIcon =()=>(
    <div className='col-dsk-12 fourStepsIcon'>
        <div className='col-dsk-3 icon'>
            <div className='tshirt'></div>
            <div className='chooseItems'>Wybierz rzeczy</div>
            <div className='border'></div>
        <div className='stepsOptions'>ubrania,zabawki sprzęt i inne</div>
        </div>
        <div className='col-dsk-3 icon'>
        <div className='pack'></div>
            <div className='chooseItems'>Spakuj je</div>
            <div className='border'></div>
        <div className='stepsOptions'>skorzystaj z worków na śmieci</div>
        </div>
        <div className='col-dsk-3 icon'>
        <div className='help'></div>
            <div className='chooseItems'>Zdecyduj komu chcesz pomóc</div>
            <div className='border'></div>
        <div className='stepsOptions'>Wybierz zaufane miejsce</div>
        </div>
        <div className='col-dsk-3 icon'>
        <div className='postman'></div>
            <div className='chooseItems'>Zamów kuriera</div>
            <div className='border'></div>
        <div className='stepsOptions'>kurier przyjedzie w dogodnym terminie</div>
        </div>
    </div>
)


export default FourStepsIcon    