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

function haversine(source, target) { // Calculating distance with haversine
    const to_radians = (degrees) => degrees *Math.PI / 180 // Converting to radians
    const target_lat = parseFloat(target.lat.slice(0,-1));
    const target_lon = parseFloat(target.lon.slice(0,-1));
    const source_lat = parseFloat(source.lat.slice(0,-1));
    const source_lon = parseFloat(source.lon.slice(0,-1));


    const d_lat = to_radians(target_lat - source_lat)
    const d_lon = to_radians(target_lon - source_lon)

    const a = Math.sin(d_lat/2)**2 + Math.cos(to_radians(source_lat)) * Math.cos(to_radians(target_lat)) * Math.sin(d_lon/2)**2
    const c = 2*Math.asin(Math.sqrt(a))
    const r = 6371
    const distance = c*r
    return distance.toFixed(2)

}


document.getElementById("search_bar").addEventListener("submit", function(event) {
        event.preventDefault(); // Page not reloading

        const city_s = document.getElementById("city_1").value; // assigns search input variable name
        const city_t = document.getElementById("city_2").value; // second city

        const source = cities[city_s] // Trying just one particular key

        const target = cities[city_t] // -::-

        const distance = haversine(source,target)
            
        document.getElementById("search_request").textContent = 
        `Distance from ${city_s}, ${source.country} to ${city_t}, ${target.country}`; // changes content of paragraph result

        document.getElementById("search_result").textContent = 
        `Closest distance is ${distance} kilometres.`;

    }) 