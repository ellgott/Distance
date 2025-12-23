import { cities } from "./Locations/locs_clean.js"; // Retrieving my data

function search(city) {
    return cities[city]; // Collecting data from dic
}
function extract(city) { // Extract data
    const result = search(city)
    if (!result) {
        return "City does not exist in database"
    }
    const {country, lat, lon} = result
    return { country, lat, lon }  // Triple object
}

document.getElementById("search_bar").addEventListener("submit", function(event) {
        event.preventDefault(); // Page not reloading

        const city_s = document.getElementById("city_1").value; // assigns search input variable name
        const city_t = document.getElementById("city_2").value; // second city


        const {country_s, lat_s, lon_s} = extract(city_s)
        const {country_t, lat_t, lon_t} = extract(city_t)
            
        document.getElementById("search_request").textContent = 
        `Du söker avstånd från ${city_s}, ${country_s} till ${city_t}, ${country_t}`; // changes content of paragraph result

        document.getElementById("search_result").textContent = 
        "Soon to be discovered";

    }) 