import React, {Component, useEffect, useState} from 'react'

const WhoWeHelp = () => {
    const [state, setState] = useState({
        desc: '',
        items: []
    });

    const fetchData = (name) => {
        fetch(`http://localhost:3000/${name}`)
            .then(res => res.json())
            .then(data => setState({
                desc: data.description,
                items: data.company
            }))
    }

    const handleClick = (name) => (e) => {
        fetchData(name)
    }

    useEffect(() => {
        fetchData('fundation')
    }, [])
   
    return(
    <section className='container' id='whoWeHelp'>
        <div className='container__row'>
            <div className='col-dsk-12 whoHelpHeader'>
                <p>Komu pomagamy ?</p>
                <p><img className='decorationsWho' src='assets/Decoration.svg'></img></p>
                <div className='whoHelpBnt col-dsk-12'>
                    <div className='col-dsk-2 fundation' onClick={handleClick('fundation')}>Fundacją</div>
                    <div className='col-dsk-2 organization' onClick={handleClick('organization')}>Organizacją pozarządowym</div>
                    <div className='col-dsk-2 local' onClick={handleClick('local')}>Lokalnym zbiórkom</div>
                </div>
                <div className='display'>
                    <div className='col-dsk-12 cla'>
                        <div className='fundationHeader'>
                        {state.desc}
                        </div>
                        <div className='elementList col-dsk-12'>
                            {state.items.map(el => (
                                <>
                                <div className='companyList col-dsk-12'>
                                    <div className='companyLi col-dsk-6'>
                                    <li className='companyName'>Fundacja {el.name}</li>
                                    <li className='target'>Cel i misja: {el.target}</li>
                                    </div>
                              
                                <div className='items col-dsk-6'>{el.items.map(el =>(
                                    <li>{el}</li>
                                ))}
                                </div>
                                
                                </div>
                                </>
                        ))}
                    </div>
                    </div>
                </div>  
                </div>
                
        </div>
    </section>
    )
}

export default WhoWeHelp