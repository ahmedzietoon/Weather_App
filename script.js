//#qeuring
let form = document.querySelector("form");
let icon = document.querySelector(".icon");
let loaction = document.querySelector("#location");
let temp = document.querySelector("#temp");
let description = document.querySelector("#description");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

//#Start fetching
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var city = document.querySelector("input").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38d943b53c1b122f4dbf1e928c37ea1f&units=metric`
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        loaction.innerHTML = `Please Enter a Valid City Name`;
        loaction.style.display = "block";
        temp.style.display = "none";
        description.style.display = "none";
        humidity.style.display = "none";
        wind.style.display = "none";
        icon.style.display = "none";
      }
    })
    .then((data) => {
      console.log(data);
      loaction.innerHTML = `${data.name} , ${data.sys.country} `;
      loaction.style.display = "block";
      temp.innerHTML = `${data.main.temp_max} °C / ${data.main.temp_min} °C `;
      temp.style.display = "block";
      description.innerHTML = `${data.weather[0].description}`;
      description.style.display = "block";
      humidity.innerHTML = `Humidity is ${data.main.humidity}%`;
      humidity.style.display = "block";
      wind.innerHTML = `Wind Speed = ${data.wind.speed} m/s`;
      wind.style.display = "block";
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="weather icon" />`;
      icon.style.display = "block";
    });
});
