const API_URL = "https://api.coinpaprika.com/v1/tickers";

const coins = document.querySelector(".coins");
const body = document.querySelector("body")
let name;
let price;

coins.innerHTML = "Loading.....";

function paintPrice() {
    fetch(API_URL)
        .then(response => response.json())
        .then(function (response) {
            for (let i = 0; i < response.length; i++) {
                name = response[i].name
                price = response[i].quotes.USD.price
                const li = document.createElement("li")
                coins.appendChild(li)
                li.innerHTML = `${i+1}. ${name}, ${price}(USD)`
            }
        })
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(paintPrice(), 5000)
})