import React from 'react';
import '../css/header.css';

const Header = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <h2>Weather App task</h2>
                </li>

                <li className="nav-btns">
                    <input type="button" value="FAVORITES" id="favorites_btn" />
                    <input type="button" value="HOME" className="nav-btns" id="home_btn" />
                </li>
            </ul>
        </div>
    )
}

export default Header
