const location = document.querySelector(".location");

const API_URL = "http://ip-api.com/json/";

location.innerHTML = "Locating you.....";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const {
            city,
            country,
            timezone
        } = data;
        location.innerHTML = `Found you at: ${city}, ${country}, ${timezone}!`;
    })
    .catch(e => {
        console.log(e);
        location.innerHTML = "Can't find you!";
    });