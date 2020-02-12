import React, {Component, useState} from 'react';


const ContactForm = () =>(
   <div className='col-dsk-5 contactForm'>
       <div>Skontaktuj sie z nami</div>
       <img className='decorationsFooter' src='assets/Decoration.svg'></img>
       <div className='contactFormItems'>
           <div className='contactFormNames'>
               <div>Wpisz swoje imię</div>
           <input className='inputNames' name='name' placeholder='Krzysztof'></input>
           </div>
           <div className='contactFormEmail'>
           <div>Wpisz swoje email</div>
           <input className='inputEmail' name='email' placeholder='abc@xyx.pl'></input>
           </div>
       </div>
       <div className='contactFormText'>
            <div>Wpisz swoją wiadomość</div>
            <textarea  type='text' name='contactText' className='contactFormTextInput' placeholder='Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'></textarea>
           </div>
           <div className ='contactFormBnt'>Wyślij</div>

           <div className='icones'>
               <div className='facebook'></div>
               <div className='istagram'></div>
           </div>
           </div>
)

export default ContactForm