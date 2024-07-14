const apiKey = "23c8dfc27ceb09597f3be6de0f90eacb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityNameValue = document.getElementById("cityName");
const searchingBtn = document.getElementById("searching");
let imageIconVal = document.getElementById("imageIcon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.getElementById("errorMsg").style.display = "block";
        document.getElementById("weatherBlock").style.display = "none";
    } else {
        var data = await response.json();
        document.getElementById("temperatureValue").innerHTML = data.name;
        document.getElementById("cityNamee").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidityValue").innerHTML = data.main.humidity + "%";
        document.getElementById("windValue").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            console.log(data.weather[0].main)
            imageIconVal.src = "clouds.png";
        } else if (data.weather[0].main == "Clear") {
            console.log(data.weather[0].main)

            imageIconVal.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            imageIconVal.src = "rain.png";
            console.log(data.weather[0].main)

        } else if (data.weather[0].main == "Drizzle") {
            imageIconVal.src = "drizzle.png";
            console.log(data.weather[0].main)

        } else if (data.weather[0].main == "Mist") {
            console.log(data.weather[0].main)

            imageIconVal.src = "mist.png";
        }
        document.getElementById("weatherBlock").style.display = "block";
        document.getElementById("errorMsg").style.display = "none";
    }
}

searchingBtn.addEventListener("click", () => {
    checkWeather(cityNameValue.value);
});
