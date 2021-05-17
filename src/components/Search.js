import React from 'react';
import '../css/search.css';
import store from '../store'
import { useSelector, useDispatch } from 'react-redux';
import { search_city } from '../actions/Search_city';
import { push_val } from '../actions/Search_city';


import axios from "axios";




const Search = () => {

    const city = useSelector(state => state.city);
    const dispatch = useDispatch();
    let string = '';

    const change = () => {

        const city_name = document.getElementById('city_name');
        string = city_name.value;
        if (string != '') {
            dispatch(search_city(string));
        }
        if (city_name.value === '') {
            string = '';
            dispatch(search_city(string));
        }
        // console.log(val.value);

        /*
        axios
        .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&q=${string}`)
        .then(response => {
            // this.setState({ todos: response.data });
            //const city_name = response.data[0].LocalizedName;
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        */


    }




    return (
        <div className="search_bar">
            <p>Search City : </p>
            <input type="text" id="city_name" value={city} onChange={change} className="basicAutoComplete" />
        </div>
    );

}


export default Search;


