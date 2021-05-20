import React from 'react';
import '../css/header.css';
import { favorites } from './Favorites';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';





/*
const display_favorites = () => {
    console.log(favorites());
}
*/

const Header = () => {


    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <h2>Weather App</h2>
                </li>

                <li className="nav-btns">
                    
                        <Link id="favorites_btn" className="btn btn-primary" to="/Favorites">FAVORITES</Link>
                        <Link className="nav-btns" className="btn btn-primary" id="home_btn" to="/">HOME</Link>
                    
                </li>
            </ul>

        </div>

    )
}

export default Header;
