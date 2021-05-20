import React from 'react';
import '../css/search.css';
import store from '../store'
import { useSelector, useDispatch } from 'react-redux';
import { search_city } from '../actions/Search_city';
import { autocompleteSearch } from './WeatherApi';
import { auto_complete_results } from './WeatherApi';

import axios from "axios";

let selected_city = '';

const Search = () => {

    const city = useSelector(state => state.city);
    const dispatch = useDispatch();
    let string = '';

    const change = () => {
        const city_name = document.getElementById('city_name');
        selected_city = city_name.value;

        string = city_name.value;
        if (string != '') {
            // storing search result in store obj
            dispatch(search_city(string));

            // calling auto complete function with search input value as parameter.
           // autocompleteSearch(string);

        }
        if (city_name.value === '') {
            string = '';
            dispatch(search_city(string));
        }



        const ac_results = document.getElementById('ac_results');
        //const all_option = ac_results.getElementsByTagName("option")
        // creating option element for each key
        //const city_opt = document.getElementsByClassName('city_opt');
    
        if (auto_complete_results.length > 0) {
            
            auto_complete_results.map(key => {

                const add_city_option = document.createElement('option');
                add_city_option.className = 'city_opt';
                add_city_option.innerHTML = key;
                ac_results.appendChild(add_city_option);

            });
        }

        /*
        const all_option = ac_results.getElementsByTagName("option")
        if (all_option != null) {
            for (let i = 0; i < all_option.length; i++) {
                if (all_option[i] != undefined) {
                    if (auto_complete_results.includes(all_option[i].value) === false) { all_option[i].remove(); }
                }
            }

        }
        */
        
        console.log(auto_complete_results);

    } // end change func'

   
    
    /*
    const selected_city_exp = () => {
        return selected_city;
    }
    */
    
    const changeFunc = () => {
    
    const city_name = document.getElementById('city_name');
    const selectBox = document.getElementById("ac_results");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    selected_city = selectedValue;
    if (city_name != null) {
        city_name.value = selectedValue;
    }
   }

    return (
        <div className="search_bar">

            <p className="h4">Search City </p>
            <input type="text" id="city_name" value={city} onChange={change} className="form-control" />
            <br></br>
            <select id="ac_results" onChange={changeFunc}>

            </select>

        </div>
    );
 
}

export const selected_city_exp = () => {
    return selected_city;
}
export default Search;



