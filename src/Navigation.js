import React, { useEffect, useState } from 'react';
import CurrentTime from './CurrentTime';

function Navigation({data}) {
    const [activeNav, setactiveNav] = useState('cupertino')

    const clickHandler = (event) => {
        const menu = document.querySelector(".menu__list");
        menu.style.setProperty(
            "--underline-width",
            `${event.target.offsetWidth}px`
          ); 
        menu.style.setProperty(
            "--underline-offset-x",
            `${event.target.offsetLeft}px`
          );
        
        event.target.parentElement.classList.add('active');
        setactiveNav(event.target.parentElement.id)
        document.querySelector(`#${activeNav}`).classList.remove('active');  
    }

    useEffect(() => {
        document.querySelector(`#${activeNav}`).classList.add('active');   
    })

    return (
        <>
            <ul className="menu__list">
                {
                    data.cities.map(i => {
                        return <li className="menu__item" key= {i.section} id={i.section} onClick={clickHandler}><a className="menu__link">{i.label}</a></li>
                    })
                }
            </ul>
            <CurrentTime city={activeNav}/>
        </>
  )
}

export default Navigation