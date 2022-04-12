var apiKey = "d71e2110a17bb00a09c9b529650035e0";
var dailyDisplay = document.querySelector("#daily");
var searchInputEl = document.querySelector('#search-input');
var searchFormEl = document.querySelector('#search-form');


var formSubmit = function (event) {
  event.preventDefault();

  var search = searchInputEl.value.trim();

  if (search) {
    console.log(search);

    searchInputEl.value = '';
  } else {
    alert('Please enter a vaild city');
  }
  
};

// geoLoation is used to get lon an lat to input into getDaily requestUrl lon and lat but couldn't get it to work correctly
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
           var city = document.createElement('h2')

           city.textContent = data[0].name + moment().format(" MMM Do YY");

           dailyDisplay.append(city);

           console.log(longitude);
           console.log(latitude);
    })
}

geoLocation();

function getDaily() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=29.5992823&lon=-51.9260001&units=imperial&exclude=hourly,minutely,alerts&appid=' + apiKey;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //console.log(data.current.temp);

        var temperature = document.createElement('p');
        var wind = document.createElement('p');
        var humidity = document.createElement('p');
        var uvi = document.createElement('p');
        
        temperature.textContent = "Temperature: " + data.current.temp + "°F";
        wind.textContent = "Wind: " + data.current.wind_speed + " MPH";
        humidity.textContent = "Humidity: " + data.current.humidity + "%";
        uvi.textContent = "UV-Index: " + data.current.uvi;

        dailyDisplay.append(temperature);
        dailyDisplay.append(wind);
        dailyDisplay.append(humidity);
        dailyDisplay.append(uvi);
      });
  }

  getDaily()

  searchFormEl.addEventListener('submit', formSubmit);