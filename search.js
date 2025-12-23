import { cities } from "./Locations/locs_clean.js";

function search(city) {
    return cities[city];
}
function extract(city) {
    const result = search(city)
    if (!result) {
        return "City does not exist in database"
    }
    const {country, lat, lon} = result
    return { country, lat, lon }  // Returnerar ett objekt med alla tre värden
}



document.getElementById("search_bar").addEventListener("submit", function(event) {
        event.preventDefault(); // Förhindra att sidan laddas om

        const city_s = document.getElementById("city_1").value; // assigns search input variable name
        const city_t = document.getElementById("city_2").value; // second city

        document.getElementById("search_request").textContent = 
        "Du söker avstånd från " + city_s + " till " + city_t; // changes content of paragraph result

        document.getElementById("search_result").textContent = 
        "Soon to be discovered";

    }) 