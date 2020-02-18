import React from 'react';
import {Link} from 'react-router-dom'


const LogOutForm = () =>(
    <section className='container '>
        <div className='container__row'>
            <div className='col-dsk-12 logOut'>
                <div className='logOutForm col-dsk-6'>
                    <div>Wylogowanie nastąpiło pomyślnie!</div>
                    <img className='decor' src='assets/Decoration.svg'></img>
                    <div className='logOutFormBnt'>
                        <Link to='/'style={{ textDecoration: 'none'}}>
                        <div>Strona Główna</div>
                        </Link> 
                    </div>
                </div>
            </div>      
        </div>   
    </section>

)


export default LogOutForm;