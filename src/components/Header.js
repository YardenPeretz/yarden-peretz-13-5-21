import React from 'react';
import '../css/header.css';
import {favorites} from './Favorites';

const display_favorites = () => {
    console.log(favorites());
}

const Header = () => {

    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <h2>Weather App</h2>
                </li>

                <li className="nav-btns">
                    <input type="button" value="FAVORITES" id="favorites_btn" onClick={display_favorites} />
                    <input type="button" value="HOME" className="nav-btns" id="home_btn" />
                </li>
            </ul>
        </div>
    )
}

export default Header
