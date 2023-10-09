/*
    Assignment #4
    {Your name here}
*/

$(function () {
    // your code here
       // Check if geolocation is available
       if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // Get current location coordinates
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Display current location in #locationhere
            const locationHere = $("#locationhere");
            locationHere.text(`Latitude: ${latitude}, Longitude: ${longitude}`);

            // Check if previous location is stored in localStorage
            const previousLocation = localStorage.getItem("previousLocation");

            if (previousLocation) {
                // Retrieve and parse the previous location
                const [prevLat, prevLong] = previousLocation.split(',').map(parseFloat);
                
                // Calculate the distance using provided function
                const distanceMeters = calcDistanceBetweenPoints(latitude, longitude, prevLat, prevLong);
                const distanceKilometers = distanceMeters / 1000;

                // Display welcome message and distance
                const welcomeMessage = $("<h1>").text("Welcome back to the page!");
                const distanceMessage = $("<h2>").text(`You traveled ${distanceKilometers.toFixed(2)} km since your last visit.`);
                $("#content").append(welcomeMessage, distanceMessage);
            } else {
                // If no previous location, display a welcome message
                const welcomeMessage = $("<h1>").text("Welcome to the page for the first time!");
                $("#content").append(welcomeMessage);
            }

            // Store the current location in localStorage
            localStorage.setItem("previousLocation", `${latitude},${longitude}`);

            // Bonus: Display geolocation accuracy
            const accuracyMessage = $("<p>").text(`Accuracy: ${position.coords.accuracy} meters`);
            locationHere.after(accuracyMessage);
        });
    } else {
        // Geolocation not available, display an error message
        const locationHere = $("#locationhere");
        locationHere.text("Geolocation is not available on this device.");
    }




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


