import React,{Component, useState} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';



const LoginForm = () =>{
    const [email, setEmail] = useState(' ');
    const [pass, setPass] = useState('');
    const [error, setError] = useState({
        email: '',
        pass: ''
    })

    const handleOnChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleOnChangePass = (e) =>{
        setPass(e.target.value)
    }

    const handleOnErrorEmail = () => {
        let err ='';

        function validateEmail() {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if(validateEmail() === false || email.length < 1){
           err = 'Podany email jest nieprawidłowy !'
        }

        setError(prevState =>{
                return {
                    ...prevState,
                    email: err
                }
        })
    }

    const handleOnErrorPass =()=>{
        let err =''

        if(pass.length < 6){
            err = 'Podane hasło jest za krótkie!'
        }
        setError(prevState =>{
            return{
                ...prevState,
                pass: err
            }
        })
    }


    return(
        <>
    <header className='container'>
        <div className='container__row '>
        <div className='closeBnt'>
        <Link to='/'style={{ textDecoration: 'none'}}>
                <div className="close-container">
                    <div className="leftright"></div>
                    <div className="rightleft"></div>
                    <label className="close">close</label>
                </div>
        </Link>
        </div>
        </div>
        </header>
        <section className='container '>
            <div className='container__row'>
                <div className='col-dsk-12'>
                    <div className='logForm col-dsk-6'>
                         <div>Zaloguj się</div>
                         <img className='decor' src='assets/Decoration.svg'></img>
                         <div className='logFormInputs'>
                            <div>Email</div>
                        <input name='email' onChange={handleOnChangeEmail} onBlur={handleOnErrorEmail}></input> 
                        <div className='loginErrors'>{error.email && 'Podany email jest nieprawidłowy !'}</div>
                        <div>Hasło</div>
                        <input type='password' name='pass' onChange={handleOnChangePass} onBlur={handleOnErrorPass}></input>
                        <div className='loginErrors'>{error.pass && 'Podane hasło jest za krótkie!'}</div>           
                </div>
                <div className='loginFormBnt'>
                    <Link to='/registration' style={{textDecoration:'none'}} >
                    <div>Załóz konto</div>
                    </Link>
                    
                    <div>Zaloguj się</div>
                </div>
                    </div>
                    </div>
                   
            </div>
           
        </section>
       </>
    )
}




export default LoginForm