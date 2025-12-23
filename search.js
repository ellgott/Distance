document.getElementById("sokruta_1").addEventListener("submit", function(event) {
        event.preventDefault(); // Förhindra att sidan laddas om
        const input_1 = document.getElementById("stad_1").value; // assigns search input variable name
        document.getElementById("output_stad_1").textContent = "Från: " + input_1; // changes content of paragraph result
        const input_2 = document.getElementById("stad_2").value // second city
        document.getElementById("output_stad_2").textContent = "Till: " + input_2
    }); 
