import React from 'react';
import '../css/header.css';
import {useSelector , useDispatch} from 'react-redux';
import {increment} from '../actions/index';

const Header = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <h2>Weather App</h2>
                </li>

                <li className="nav-btns">
                    <input type="button" onClick = {() => dispatch(increment())}value="FAVORITES" id="favorites_btn" />
                    <input type="button" value="HOME" className="nav-btns" id="home_btn" />
                </li>
            </ul>
        </div>
    )
}

export default Header
