import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";


export const Header = () =>{
    const colorOfLink = ({isActive}:{isActive: boolean})=>({backgroundColor: isActive ? 'saddlebrown' : ' hsla(26, 40%, 43%, 1)'})


return (
    <>
    <div className="wrapper">
        <img className="knigaImg" src="images/ksiazka3.jpg" alt="obraz" />

         <div className="nav">
            <NavLink className="navButton" style={colorOfLink} to="/books">Ksiązki</NavLink>
            <NavLink className="navButton" style={colorOfLink} to="/clients">Klienci</NavLink>
            <NavLink className="navButton" style={colorOfLink} to="/borrows">Wypożyczenia</NavLink>
        </div>


    </div>

    </>
)
};