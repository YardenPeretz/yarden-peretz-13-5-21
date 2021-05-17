import React from 'react'
import '../css/weather.css'
import { useSelector, useDispatch } from 'react-redux';
import { add_favorite } from '../actions/Add_favorite';
//import search from './components/Search';
import store from '../store'
import axios from "axios";



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
        dispatch(add_favorite(last_search));
    }

    return (

        <div className="display_cities">
            <input type="button" onClick={debuger} value="show_store" />
            <div className="top_section">
                <ul className="top_section_list">
                    <li>
                        <div className="tlv_default"></div>
                    </li>
                    <li className="city_details">
                        <h5 className="city_name">Tel Aviv</h5>
                        <p className="city_temp">38 C</p>
                    </li>
                    <li className="add_favorites">
                        <input type="button" onClick={() => addFavoriteCity()} value="Add to Favorites" />
                    </li>
                </ul>
            </div>{/*end top_section*/}


            <h2 className="dsc_heading">scattered clouds</h2>

            <div className="display_days_and_degrees">
                <div className="row">
                    <div className="col-sm-3 day_box">sunday</div>
                    <div className="col-sm-3 day_box">monday</div>
                    <div className="col-sm-3 day_box">tuesday</div>
                    <div className="col-sm-3 day_box">wednesday</div>
                    <div className="col-sm-3 day_box">thursday</div>

                </div>
            </div>


        </div>



    )
}

export default Weather
