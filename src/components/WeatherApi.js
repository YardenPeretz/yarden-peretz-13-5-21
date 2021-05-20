import axios from "axios";
let city_key = 'tel aviv';

export const auto_complete_results = [];
export const autocompleteSearch = (chars) => {
    //M0neXmqgNyGUaB1sgb7PFHXpzYHSGuZO new api
    //dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl old api
    axios
        .get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&q=${chars}`)
        .then(response => {
            // retrieving all possible cities based on string returned from search input.
            // and push it to auto_complete_results array
           
                city_key = response.data[0].Key;
                currentConditions(city_key);
           

            const temp_cities_arr = [];
            response.data.forEach(element => {
                const city_name = element.LocalizedName;
                //const city_key = element.Key;
                auto_complete_results.push(city_name);
                temp_cities_arr.push(city_name);

                // add and remove values from array, based on results returning ajax call

            });


            // comparing 
            for (let i = 0; i < auto_complete_results.length; i++) {
                if (temp_cities_arr.includes(auto_complete_results[i]) === false) {
                    auto_complete_results.splice(i, 1)
                    //auto_complete_results.splice(i);
                    //auto_complete_results.splice(auto_complete_results.indexOf(auto_complete_results[i]),1)       
                }
            }
            // console.log("ac array : " + auto_complete_results);
            console.log("res.data array : " + temp_cities_arr);

        })
        .catch(function (error) {
            return error;
        });

}

const curr_string = '';
export const currentConditions = (city_key) => {
    // checking if search input is empty, if not empty then set default city(tel-aviv)

    axios
        .get(`https://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&`)
        .then(response => {
            const today_temp = document.getElementById('today_temp');
            const today = document.getElementById('today');
            today.innerText = 'today';
            today_temp.innerText = response.data[0].Temperature.Metric.Value;
            console.log("city key " + city_key);
        })
        .catch(function (error) {
            console.log(error);
        });


}
export const next_five_days_results = [];
export const nextFiveDays = () => {
    axios
        .get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl`)
        .then(response => {
            /*
            response.data.forEach(element => {
                
            });
            */

            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}



