let button = document.getElementById('submit');
const textbox = document.getElementById('text');
function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd253243a37de6d55af452cbcb4890ae`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
               console.log("Error ")
                
            }
            return response.json();
        })
        .then((data) => {
            const {
                main
            } = data;
            console.log("main weather is ",main)
            textbox.innerHTML = `<b>Temperature: ${main.temp-273}°C</b> <br> <b> Humidity: ${main.humidity}%</b><br> <b>description: ${data.weather[0].description}</b>`;
        })
        .catch((error) => console.error(`Error fetching weather data: ${error.message}`));
}

button.addEventListener('click', getWeather);


