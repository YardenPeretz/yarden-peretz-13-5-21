import axios from "axios";

export const autocompleteSearch = (chars) => {

        axios
        .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&q=${chars}`)
        .then(response => {
            // this.setState({ todos: response.data });
            //const city_name = response.data[0].LocalizedName;
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
}

export const currentConditions = (curr_string) => {
    // checking if search input is empty, if not empty then set default city(tel-aviv)

    if (curr_string != '' || curr_string != undefined) {
        axios
            .get(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=%09dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl`)
            .then(response => {
                // this.setState({ todos: response.data });
                //const city_name = response.data[0].LocalizedName;
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {
        axios
            .get(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=%09dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl`)
            .then(response => {
                // this.setState({ todos: response.data });
                //const city_name = response.data[0].LocalizedName;
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export const nextFiveDays = () => {

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
}

