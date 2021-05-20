import React from 'react';
import '../css/weather.css';
import { useSelector, useDispatch } from 'react-redux';
import { add_favorite } from '../actions/Add_favorite';
//import search from './components/Search';
import store from '../store';
import { currentConditions } from './WeatherApi';
import { nextFiveDays } from './WeatherApi';
import { selected_city_exp } from './Search';

const debuger = () => {
    const temp = store.getState();
    console.log(temp);

}

const Weather = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const addFavoriteCity = () => {
        const current_store = store.getState();
        const last_search = current_store.searchCity;
        if(last_search != undefined && last_search != '' && last_search !=selected_city_exp()){
            dispatch(add_favorite(last_search));

        }
    }

    setInterval(() => {
        const display_city_name = document.getElementById('display_city_name');

        if (selected_city_exp() != undefined && selected_city_exp() != '' && selected_city_exp() != null && display_city_name != null) {
            display_city_name.innerText = selected_city_exp();
        }
    }, 500);

    // get temperature and details about current location

    let empty_string = '';

    //currentConditions();


    /*
    setTimeout(() => {
        nextFiveDays();
    },5000)
    */

    return (

        <div className="display_cities">

            <input type="button" onClick={debuger} id="show_store" value="show_store" />
            <div className="top_section">
                <ul className="top_section_list">
                    <li>
                        <div className="tlv_default" id="today"></div>
                    </li>
                    <li className="city_details">
                        <h5 className="city_name" id="display_city_name">Tel Aviv</h5>
                        <p className="city_temp" id="today_temp">38C</p>
                    </li>
                    <li className="add_favorites">
                        <input type="button" onClick={() => addFavoriteCity()} className="btn" value="Add to Favorites" />
                    </li>
                </ul>
            </div>{/*end top_section*/}


            <h2 className="dsc_heading">heading</h2>

            <div className="display_days_and_degrees">
                <div className="row">
                    <div className="col-sm-2 day_box">
                        <h5>sun</h5>
                        <p>38C</p>
                    </div>
                    <div className="col-sm-2 day_box">
                        <h5>mon</h5>
                        <p>38C</p>
                    </div>
                    <div className="col-sm-2 day_box">
                        <h5>tue</h5>
                        <p>38C</p>
                    </div>
                    <div className="col-sm-2 day_box">
                        <h5>wed</h5>
                        <p>38C</p>
                    </div>
                    <div className="col-sm-2 day_box">
                        <h5>thu</h5>
                        <p>38C</p>
                    </div>
                </div>
            </div>


        </div>



    )
}

export default Weather;
