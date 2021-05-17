const searchCityReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH':
           //console.log("this is from reducer" + JSON.stringify(state))
            if (state.length > 0) {
                state = [];
                return state = { city: action.city };
            } else {
                return state = { city: action.city };
            }
        default:
            return state;
    }
}

export default searchCityReducer;

