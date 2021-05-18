import axios from "axios";

export const auto_complete_results = [];
export const autocompleteSearch = (chars) => {
    //M0neXmqgNyGUaB1sgb7PFHXpzYHSGuZO new api
    //dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl old api
    axios
        .get(`dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&q=${chars}`)
        .then(response => {
            // recieving all possible cities based on string returned from search input.
            // and push it to auto_complete_results array
            const temp_cities_arr = [];
            response.data.forEach(element => {
                const city_name = element.LocalizedName;
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
export const currentConditions = (curr_string) => {
    // checking if search input is empty, if not empty then set default city(tel-aviv)

    if (curr_string != '' || curr_string != undefined) {
        axios
            .get(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=M0neXmqgNyGUaB1sgb7PFHXpzYHSGuZO`)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {
        axios
            .get(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=M0neXmqgNyGUaB1sgb7PFHXpzYHSGuZO`)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export const nextFiveDays = () => {
    axios
        .get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=%09dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl`)
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}



