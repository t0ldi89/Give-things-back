import React, {Component} from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';


const ContactAndFooter = ()=>(
    <>
    <section className='container'>
        <div className='container__row contactFormPosition'>
            <div className='col-dsk-7 contact'><Footer/> </div>
            <ContactForm/>     
            </div>
            
    </section>  
    
    </>
)

export default ContactAndFooter