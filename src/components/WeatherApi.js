import axios from "axios";
let city_key = 'tel aviv';

export const auto_complete_results = [];
export const autocompleteSearch = (chars) => {
    //M0neXmqgNyGUaB1sgb7PFHXpzYHSGuZO new key
    //dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl old key
    // sqVSAPfjdrvqSbBKNAu8XLHsGhb6JDRr another key
    axios
        .get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=sqVSAPfjdrvqSbBKNAu8XLHsGhb6JDRr&q=${chars}`)
        .then(response => {
            // retrieving all possible cities based on string returned from search input.
            // and push it to auto_complete_results array

            city_key = response.data[0].Key;
            currentConditions(city_key);
            nextFiveDays(city_key);


            const temp_cities_arr = [];
            response.data.forEach(element => {
                const city_name = element.LocalizedName;
                auto_complete_results.push(city_name);
                temp_cities_arr.push(city_name);
            });


            // deleting irrelevant results from autocomplete input 
            for (let i = 0; i < auto_complete_results.length; i++) {
                if (temp_cities_arr.includes(auto_complete_results[i]) === false) {
                    auto_complete_results.splice(i, 1)
                }
            }

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
        .get(`https://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=sqVSAPfjdrvqSbBKNAu8XLHsGhb6JDRr&`)
        .then(response => {
            const today_temp = document.getElementById('today_temp');
            const today = document.getElementById('today');
            const weather_text = document.getElementById('weather_text');
            today.innerText = 'today';
            today_temp.innerText = response.data[0].Temperature.Metric.Value;
            weather_text.innerText = response.data[0].WeatherText;
            console.log(response.data[0].WeatherText);
        })
        .catch(function (error) {
            console.log(error);
        });


}
export const next_five_days_results = [];
export const nextFiveDays = (city_key) => {
    axios
        .get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=sqVSAPfjdrvqSbBKNAu8XLHsGhb6JDRr`)
        .then(response => {
            const first_day = document.getElementById('first_day_temp');
            const second_day = document.getElementById('second_day_temp');
            const third_day = document.getElementById('third_day_temp');
            const fourth_day = document.getElementById('fourth_day_temp');
            const fifth_day = document.getElementById('fifth_day_temp');
            const temp_arr = [];

            for(let i = 0; i < response.data.DailyForecasts.length; i++){
                const fahrenheit = response.data.DailyForecasts[i].Temperature.Maximum.Value;
                const F_to_C = ((fahrenheit - 32) * 0.5556).toFixed(0);
                temp_arr.push(F_to_C);
            }
           
            first_day.innerText = temp_arr[0] + "C";
            second_day.innerText = temp_arr[1] + "C";
            third_day.innerText = temp_arr[2] + "C";
            fourth_day.innerText = temp_arr[3] + "C";
            fifth_day.innerText = temp_arr[4] + "C";
            console.log(temp_arr)
        
            //(F - 32) * 5556
           
        })
        .catch(function (error) {
            console.log(error);
        });
}



