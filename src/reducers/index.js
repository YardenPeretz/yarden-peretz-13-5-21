import searchCityReducer from './Search_city';
import addCityReducer from './Add_favorite';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    searchCity: searchCityReducer,
    addFavoriteCity: addCityReducer
});

export default allReducers;