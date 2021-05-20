import store from '../store'
import '../css/favorites.css';

const Favorites = () => {
    const current_store = store.getState();
    const get_favorites = current_store.addFavoriteCity;

    const fav_list = document.getElementById('fav_list');
    const appendFavCity = () => {

        if (fav_list != null) {
            get_favorites.map(element => {

                const add_city_div = document.createElement('div');
                
                add_city_div.className = "col-sm-4 favorite";
                add_city_div.innerHTML = element.city;
                const favorite_div = document.getElementsByTagName('div');
                


                   // const div = document.getElementsByTagName('div');
                          
                        fav_list.appendChild(add_city_div)
                    
            });
        }



    }

    appendFavCity();
    
    /*
    const delete_old_div = () =>{

    
    const all_div = fav_list.getElementsByTagName("div");
    if (all_div != null) {
        for (let i = 0; i < all_div.length; i++) {
            if (all_div[i] != undefined) {
                if(get_favorites.includes(all_div[i].value) === false){all_div[i].remove();}
            }
        }

    }

}
*/
    
    return (
        <div className="container">
            <div className="row" id="fav_list"></div>
        </div>
    )
}



export default Favorites;

