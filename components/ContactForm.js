import React, {Component, useState} from 'react';


const ContactForm = () =>{

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] =useState({
        errName: '',
        errMail: '',
        errMsg: '',
        succes: ''
    })

    const handleOfName = (el) =>{
        setName(el.target.value)
    }

    const handleOfMail = (el) => {
        setMail(el.target.value)
    }

    const handleOfMsg = (el) => {
        setMsg(el.target.value)
    }   

    const handleOnErrorName = (e)=>{
        let err ='';
        const space = ' '
        if(e.target.value.search(space) != -1 || e.target.value < 1){   
           err = 'Podane imię jest nieprawidłowe !'
        }
        setError(prevState =>{
            return {
                ...prevState,
                errName: err
            }   
        })
        }
    
        const handleOnErrorMail = ()=>{
            let err ='';
            function validateEmail() {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(mail).toLowerCase());
            }
            if(validateEmail() == false || mail.length < 1){
               err = 'Podany email jest nieprawidłowy !'
            }
            
            setError(prevState =>{
                return{
                    ...prevState,
                    errMail: err
                }
            })
            }

            const handleOnErrorMsg = ()=>{
                let err =''
                if(msg.length < 1 || msg.length <= 120){
                    err = 'Wiadomość musi mieć conajmniej 120 znaków !'
                }
                setError(prevState=>{
                    return{
                        ...prevState,
                        errMsg: err
                    }
                })
            }

    const handleOnSubmitForm =(e)=>{
        e.preventDefault();
        let succes = ''
        const ob ={
            name: name,
            email: mail,
            message: msg
        }

        if(error.errMail.length < 1 && error.errMsg.length < 1 && error.errName.length < 1){
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: "POST",
                headers: {
                "Content-type": "application/json"
                },
                body: JSON.stringify(ob)
            })
            .then(resp => resp.json())
            .then(resp =>{
                console.log(resp)
                if(resp.status = 'success'){
                  succes = 'Wiadomośc została wysłana! Wkrótce się skontaktujemy'
                }

                setError(prevState =>{
                    return {
                        ...prevState,
                        succes: succes
                    }
                })
                setName('')
                setMail('')
                setMsg('')
            })
        
    }
}   

 return( 
    <form className='col-dsk-5 contactForm' onSubmit={handleOnSubmitForm}>
    <div>Skontaktuj sie z nami</div>
    <img className='decorationsFooter' src='assets/Decoration.svg'></img>
    <div className='msgSuccess'>{error.succes && 'Wiadomośc została wysłana! Wkrótce się skontaktujemy'}</div>
    <div className='contactFormItems'>
        <div className='contactFormNames'>
            <div>Wpisz swoje imię</div>
        <input className='inputNames' name='name' placeholder='Krzysztof'  onChange={handleOfName} onBlur={handleOnErrorName} value={name}></input>
        <div className='errMsg'>{error.errName && "Podane imię jest nieprawidłowe !"}</div>
        </div>
        <div className='contactFormEmail'>
        <div>Wpisz swoje email</div>
        <input className='inputEmail' name='email' placeholder='abc@xyx.pl' onChange={handleOfMail} onBlur={handleOnErrorMail} value={mail}></input>
        <div className='errMsg'>{error.errMail && 'Podany email jest nieprawidłowy !'}</div>
        </div>
    </div>
    <div className='contactFormText'>
         <div>Wpisz swoją wiadomość</div>
         <textarea  type='text' name='contactText' className='contactFormTextInput' placeholder='Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' value={msg} onChange={handleOfMsg} onBlur={handleOnErrorMsg}></textarea>
         <div className='errMsg'>{error.errMsg && 'Wiadomość musi mieć conajmniej 120 znaków !'}</div>
        </div>
        <input type='submit' className ='contactFormBnt' value='Wyślij'></input>

        <div className='icones'>
            <div className='facebook'></div>
            <div className='istagram'></div>
        </div>
        </form>
)
    }
  

export default ContactForm