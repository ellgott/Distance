import { cities } from "Locations/locs_clean.js";

function search(city) {
    return cities[city];
}


document.getElementById("search_bar").addEventListener("submit", function(event) {
        event.preventDefault(); // Förhindra att sidan laddas om

        const city_s = document.getElementById("city_1").value; // assigns search input variable name
        const city_t = document.getElementById("city_2").value; // second city

        document.getElementById("search_request").textContent = 
        "Du söker avstånd från " + city_s + " till " + city_t; // changes content of paragraph result


        
        const source = search(city_s);
        const country_s = source.country;
        const lat_s = source.lat;
        const lon_s = source.lon;

        const target = search(city_t);
        const country_t = target.country;
        const lat_t = target.lat;
        const lon_t = target.lon;

        document.getElementById("search_result").textContent = 
        city_s + " in " + country_s + " and " + city_t + " in " + country_t;

    }) 