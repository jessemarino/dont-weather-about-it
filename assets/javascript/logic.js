var apiKey = "d71e2110a17bb00a09c9b529650035e0";
var dailyDisplay = document.querySelector("#daily");
var lat = latitude;
var lon = longitude;

console.log(lat);
console.log(lon)

function geoLocation() {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=SanDiego&limit=5&appid=' + apiKey;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data);
            var longitude = data[0].lon;
            var latitude = data[0].lat;

            longitude.textContent = lon;
            latitude.textContent = lat;

      })
}

geoLocation();

function getDaily() {
    //var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=SanDiego&limit=5&appid=' + apiKey;
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=-29.5992823&lon=51.9260001&units=imperial&exclude=hourly,minutely,alerts&appid=' + apiKey;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //console.log(data.current.temp);

        var city = document.createElement('h2')
        var temperature = document.createElement('p');
        var wind = document.createElement('p');
        var humidity = document.createElement('p');
        var uvi = document.createElement('p');
        
        city.textContent = data.timezone; 
        temperature.textContent = "Temperature: " + data.current.temp;
        wind.textContent = "Wind: " + data.current.weather.wind_speed;
        humidity.textContent = "Humidity: " + data.current.humidity;
        uvi.textContent = "UV-Index: " + data.current.uvi;
        console.log(city);

        dailyDisplay.append(city);
        dailyDisplay.append(temperature);
        dailyDisplay.append(wind);
        dailyDisplay.append(humidity);
        dailyDisplay.append(uvi);
      });
  }

  //getDaily()