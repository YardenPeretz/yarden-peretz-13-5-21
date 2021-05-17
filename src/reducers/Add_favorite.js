const addCityReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            state.push(action.city)
            return state;
        default:
            return state;
            
    }   
        
}

export default addCityReducer;