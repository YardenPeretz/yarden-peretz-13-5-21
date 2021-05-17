import store from '../store'
export const favorites = () => {
    const current_store = store.getState();
   
    const get_favorites = current_store.addFavoriteCity;
    get_favorites.forEach(element => {
                console.log(element.city)
    })
    return (
        <div className="favorite_cities">
            {
                
                              
            }

        </div>
    )
}

