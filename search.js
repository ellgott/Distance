import { cities } from "./Locations/locs_clean.js"; // Retrieving my data

function search(city) {
    return cities[city]; // Collecting data from dic
}
function extract(city) { // Extract data
    const result = search(city)
    if (!result) {
        return "City does not exist in database"
    }
    return result
}

document.getElementById("search_bar").addEventListener("submit", function(event) {
        event.preventDefault(); // Page not reloading

        const city_s = document.getElementById("city_1").value; // assigns search input variable name
        const city_t = document.getElementById("city_2").value; // second city

        source = cities['Stockholm']
        const country_s = source.country
        const lat_s = source.lat
        const lon_s = source.lon

        target = cities['Abu Dhabi']
        const country_t = target.country
        const lat_t = target.lat
        const lon_t = target.lon
            
        document.getElementById("search_request").textContent = 
        `Distance from ${city_s}, ${country_s} to ${city_t}, ${country_t}`; // changes content of paragraph result

        document.getElementById("search_result").textContent = 
        "Soon to be discovered";

    }) 