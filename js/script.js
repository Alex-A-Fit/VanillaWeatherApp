//create our url
apikey = "&appid=64c32382d7f20134fba026b769bba586";
let url_singleDay = "http://api.openweathermap.org/data/2.5/weather?q=";
let city = "Turlock";

//api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={API key}
let url_5Day = "http://api.openweathermap.org/data/2.5/forecast?q="

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
let url_Dayof = "https://api.openweathermap.org/data/2.5/onecall?lat="
let url_DayofPT2 = "&lon="
let imperialConv = "&units=imperial"
let exclude = "&exclude="


let todaysDateFull = new Date();
let todaysDate = "";
todaysDate = (todaysDateFull.getMonth() + 1) + "/" + todaysDateFull.getDate() + "/" + todaysDateFull.getFullYear();

let todaysSpecificDate = "";
let tomorrowSpecificDate = "";
let tomorrowX2SpecificDate = "";
let tomorrowX3SpecificDate = "";
let tomorrowX4SpecificDate = "";
let tomorrowX5SpecificDate = "";

switch (todaysDateFull.getDay()) {
    case 0:
        todaysSpecificDate = "Sunday";
        tomorrowSpecificDate = "Monday"
        tomorrowX2SpecificDate = "Tuesday"
        tomorrowX3SpecificDate = "Wednesday"
        tomorrowX4SpecificDate = "Thursday"
        tomorrowX5SpecificDate = "Friday"
        break;
    case 1:
        todaysSpecificDate = "Monday";
        tomorrowSpecificDate = "Tuesday"
        tomorrowX2SpecificDate = "Wednesday"
        tomorrowX3SpecificDate = "Thursday"
        tomorrowX4SpecificDate = "Friday"
        tomorrowX5SpecificDate = "Saturday"
        break;
    case 2:
        todaysSpecificDate = "Tuesday";
        tomorrowSpecificDate = "Wednesday"
        tomorrowX2SpecificDate = "Thursday"
        tomorrowX3SpecificDate = "Friday"
        tomorrowX4SpecificDate = "Saturday"
        tomorrowX5SpecificDate = "Sunday"
        break;
    case 3:
        todaysSpecificDate = "Wednesday";
        tomorrowSpecificDate = "Thursday"
        tomorrowX2SpecificDate = "Friday"
        tomorrowX3SpecificDate = "Saturday"
        tomorrowX4SpecificDate = "Sunday"
        tomorrowX5SpecificDate = "Monday"
        break;
    case 4:
        todaysSpecificDate = "Thursday";
        tomorrowSpecificDate = "Friday"
        tomorrowX2SpecificDate = "Saturday"
        tomorrowX3SpecificDate = "Sunday"
        tomorrowX4SpecificDate = "Monday"
        tomorrowX5SpecificDate = "Tuesday"
        break;
    case 5:
        todaysSpecificDate = "Friday";
        tomorrowSpecificDate = "Saturday"
        tomorrowX2SpecificDate = "Sunday"
        tomorrowX3SpecificDate = "Monday"
        tomorrowX4SpecificDate = "Tuesday"
        tomorrowX5SpecificDate = "Wednesday"
        break;
    case 6:
        todaysSpecificDate = "Saturday";
        tomorrowSpecificDate = "Sunday"
        tomorrowX2SpecificDate = "Monday"
        tomorrowX3SpecificDate = "Tuesday"
        tomorrowX4SpecificDate = "Wednesday"
        tomorrowX5SpecificDate = "Thursday"
}



// add 1 day to today
let tomorrow = new Date()
let tomorrowsDate = tomorrow.setDate(new Date().getDate() + 1);
tomorrowsDate = (tomorrow.getMonth() + 1) + "/" + tomorrow.getDate();


// add 2 days to today
let tomorrowX2 = tomorrow.setDate(new Date().getDate() + 2);
tomorrowX2 = (tomorrow.getMonth() + 1) + "/" + tomorrow.getDate();


// add 3 days to today
let tomorrowX3 = tomorrow.setDate(new Date().getDate() + 3);
tomorrowX3 = (tomorrow.getMonth() + 1) + "/" + tomorrow.getDate();


// add 4 days to today
let tomorrowX4 = tomorrow.setDate(new Date().getDate() + 4);
tomorrowX4 = (tomorrow.getMonth() + 1) + "/" + tomorrow.getDate();


// add 5 days to today
let tomorrowX5 = tomorrow.setDate(new Date().getDate() + 5);
tomorrowX5 = (tomorrow.getMonth() + 1) + "/" + tomorrow.getDate();


let searchCity = document.getElementById("searchCity");
let searchIcon = document.getElementById("searchIconImg");
let citySearched = document.getElementById("City");
let addFavorite = document.getElementById("addFavorite");
let favoriteList = document.getElementById("dropdownFavorites");
let SpecificDate = document.getElementById("SpecificDate");
let exactDate = document.getElementById("exactDate");
let currentTemp = document.getElementById("currentTemp");
let currentDesc = document.getElementById("currentDesc");
let currentDesc1 = document.getElementById("currentDesc1");
let currentDesc2 = document.getElementById("currentDesc2");
let currentDesc3 = document.getElementById("currentDesc3");
let currentMorningTemp = document.getElementById("currentMorningTemp");
let currentNoonTemp = document.getElementById("currentNoonTemp");
let currentEveningTemp = document.getElementById("currentEveningTemp");


let day1 = document.getElementById("day1");
let day1desc = document.getElementById("day1Desc")
let day1Temp = document.getElementById("day1Temp")
let pic1 = document.getElementById("pic1")


let day2 = document.getElementById("day2");
let day2desc = document.getElementById("day2Desc")
let day2Temp = document.getElementById("day2Temp")
let pic2 = document.getElementById("pic2")

let day3 = document.getElementById("day3");
let day3desc = document.getElementById("day3Desc")
let day3Temp = document.getElementById("day3Temp")
let pic3 = document.getElementById("pic3")

let day4 = document.getElementById("day4");
let day4desc = document.getElementById("day4Desc")
let day4Temp = document.getElementById("day4Temp")
let pic4 = document.getElementById("pic4")

let day5 = document.getElementById("day5");
let day5desc = document.getElementById("day5Desc")
let day5Temp = document.getElementById("day5Temp")
let pic5 = document.getElementById("pic5")




let highestTempDay1 = 0;
let lowestTempDay1 = 0;

let highestTempDay2 = 0;
let lowestTempDay2 = 0;

let highestTempDay3 = 0;
let lowestTempDay3 = 0;

let highestTempDay4 = 0;
let lowestTempDay4 = 0;

let highestTempDay5 = 0;
let lowestTempDay5 = 0;

let morningTempDay1 = 0;
let morningTempDay2 = 0;
let morningTempDay3 = 0;
let morningTempDay4 = 0;
let morningTempDay5 = 0;

let noonTempDay1 = 0;
let noonTempDay2 = 0;
let noonTempDay3 = 0;
let noonTempDay4 = 0;
let noonTempDay5 = 0;

let eveningTempDay1 = 0;
let eveningTempDay2 = 0;
let eveningTempDay3 = 0;
let eveningTempDay4 = 0;
let eveningTempDay5 = 0;

let DescriptionDay1 = "";
let DescriptionDay2 = "";
let DescriptionDay3 = "";
let DescriptionDay4 = "";
let DescriptionDay5 = "";

let generalWeatherDD1 = "";
let generalWeatherDD2 = "";
let generalWeatherDD3 = "";
let generalWeatherDD4 = "";
let generalWeatherDD5 = "";


let currentTemperature = 0;
let currentMorningTemperature = 0;
let currentNoonTemperature = 0;
let currentEveningTemperature = 0;
let currentDescription = "";
let currentGeneralWeatherDesc = "";

let currentLong = 0;
let currentLat = 0;


let favoriteCities = [];
let favoriteCity1 = "";

city = "Stockton"
loadCurrentWeather(url_singleDay + city + imperialConv + apikey);
setTimeout(function () {

loadCurrentWeather2(url_Dayof + currentLat + url_DayofPT2 + currentLong + exclude + "hourly,minutely,alerts" + imperialConv + apikey);
}, 500)


    function checkLS() {
        if (JSON.parse(localStorage.getItem("Cities"))) {
            const data = JSON.parse(localStorage.getItem("Cities"));
            favoriteCities = data;

        }

    }

    function onLoad() {

        checkLS();
        if (favoriteCities != null) {
            for (let f = 0; f < favoriteCities.length; f++) {
                let row = document.createElement("div");
                row.classList = "row";

                let col10 = document.createElement("div");
                col10.classList = "col-10";

                let favbtn = document.createElement("button");
                favbtn.classList = "dropdown-item dropdownFavSize";
                favbtn.setAttribute("type", "button");
                favbtn.innerText = city;

                favbtn.addEventListener('click', function () {
                    city = "";
                    city = favbtn.innerText;
                    loadCurrentWeather(url_singleDay + city + imperialConv + apikey);
                    setTimeout(function () {

                        loadCurrentWeather2(url_Dayof + currentLat + url_DayofPT2 + currentLong + exclude + "hourly,minutely,alerts" + imperialConv + apikey);
                    }, 500)
                    if (addFavorite.classList.contains("far")) {
                        addFavorite.classList.remove("far");
                        addFavorite.classList.add("fas");
                    }
                });
                col10.appendChild(favbtn);


                let col2 = document.createElement("div");
                col2.classList = "col-2 pt-3";

                let iElement = document.createElement("i");
                iElement.classList = "fas fa-backspace fa-lg";
                iElement.addEventListener('click', function () {
                    for (let d = 0; d < favoriteCities.length; d++) {
                        if (favbtn.innerText == favoriteCities[d]) {
                            favoriteCities.splice(d, 1);
                            addFavorite.classList.remove("fas");
                            addFavorite.classList.add("far");
                        }
                        if (favoriteCities.length == 0) {
                            localStorage.clear();
                            favoriteList.removeChild(row);


                        }
                        else if (favoriteCities.length > 0) {
                            localStorage.removeItem("Cities", favoriteCities[d]);
                            favoriteList.removeChild(row);

                        }
                    }
                });
                col2.appendChild(iElement);
                row.appendChild(col10);
                row.appendChild(col2);
                favoriteList.appendChild(row);
            }
        }

    }
    onLoad();

    addFavorite.addEventListener('click', function () {

        if (favoriteCities.length < 5 && addFavorite.classList.contains("far")) {
            addFavorite.classList.remove("far");
            addFavorite.classList.add("fas");

            savesFavorite(city);


            let row = document.createElement("div");
            row.classList = "row";

            let col10 = document.createElement("div");
            col10.classList = "col-10";

            let favbtn = document.createElement("button");
            favbtn.classList = "dropdown-item dropdownFavSize";
            favbtn.setAttribute("type", "button");
            favbtn.innerText = city;

            favbtn.addEventListener('click', function () {
                city = "";
                city = favbtn.innerText;
                loadCurrentWeather(url_singleDay + city + imperialConv + apikey);
                setTimeout(function () {

                    loadCurrentWeather2(url_Dayof + currentLat + url_DayofPT2 + currentLong + exclude + "hourly,minutely,alerts" + imperialConv + apikey);
                }, 500)
                addFavorite.classList.remove("far");
                addFavorite.classList.add("fas");
            });
            col10.appendChild(favbtn);

            let col2 = document.createElement("div");
            col2.classList = "col-2 pt-3";

            let iElement = document.createElement("i");
            iElement.classList = "fas fa-backspace fa-lg";
            iElement.addEventListener('click', function () {
                for (let d = 0; d < favoriteCities.length; d++) {
                    if (favbtn.innerText == favoriteCities[d]) {
                        favoriteCities.splice(d, 1);
                        addFavorite.classList.remove("fas");
                        addFavorite.classList.add("far");
                    }
                    if (favoriteCities.length == 0) {
                        localStorage.clear();
                        favoriteList.removeChild(row);


                    }
                    else if (favoriteCities.length > 0) {
                        localStorage.removeItem("Cities", favoriteCities[d]);
                        favoriteList.removeChild(row);

                    }
                }
            });
            col2.appendChild(iElement);
            row.appendChild(col10);
            row.appendChild(col2);
            favoriteList.appendChild(row);

        } else if(addFavorite.classList.contains("fas")){
            alert("This city is already added to favorites. :D")
        }
         else{
            alert("Please remove a Favorite City to add another City to Favorites.");
        }
    });

    function savesFavorite(favoriteCity) {
        if (favoriteCities == null) {
            favoriteCity1 = city;
            favoriteCities.push(favoriteCity1);
            localStorage.setItem("Cities", JSON.stringify(favoriteCities));

        } else if (favoriteCities.length < 5) {
            favoriteCity1 = city;
            favoriteCities.push(favoriteCity1);
            localStorage.setItem("Cities", JSON.stringify(favoriteCities));
        }
    };

    searchCity.addEventListener('keypress', function (e) {
        if (e.code === "Enter") {
            if (searchCity.value == "" || searchCity.value == " ") {
                alert("What is a city with no name?")
            } else {
                city = searchCity.value
                console.log(url_singleDay + city + imperialConv + apikey)
                loadCurrentWeather(url_singleDay + city + imperialConv + apikey);
                setTimeout(function () {
                    console.log(url_Dayof + currentLat + url_DayofPT2 + currentLong + exclude + "hourly,minutely,alerts" + imperialConv + apikey)
                    loadCurrentWeather2(url_Dayof + currentLat + url_DayofPT2 + currentLong + exclude + "hourly,minutely,alerts" + imperialConv + apikey);
                }, 500)
                if (favoriteCities != null) {
                    for (let i = 0; i < favoriteCities.length; i++) {
                        if (city == favoriteCities[i]) {
                            if (addFavorite.classList.contains("far")) {
                                addFavorite.classList.remove("far");
                                addFavorite.classList.add("fas");
                            }
                            break;
                        } else {
                            addFavorite.classList.remove("fas");
                            addFavorite.classList.add("far");
                        }
                    }

                }
            };
            e.preventDefault();
        };

    });

    searchIcon.addEventListener('click', function (e) {

        if (searchCity.value == "" || searchCity.value == " ") {
            alert("What is a city with no name?")
        } else {
            city = searchCity.value
            loadCurrentWeather(url_singleDay + city + "&units=imperial" + apikey);
            setTimeout(function () {

                loadCurrentWeather2(url_Dayof + currentLat + url_DayofPT2 + currentLong + exclude + "hourly,minutely,alerts" + imperialConv + apikey);
            }, 500)
            if (favoriteCities != null) {
                for (let i = 0; i < favoriteCities.length; i++) {
                    if (city == favoriteCities[i]) {
                        if (addFavorite.classList.contains("far")) {
                            addFavorite.classList.remove("far");
                            addFavorite.classList.add("fas");
                        }
                        break;
                    } else {
                        addFavorite.classList.remove("fas");
                        addFavorite.classList.add("far");
                    }
                }
            }
        };
        e.preventDefault();
    });

    function loadCurrentWeather(theDay) {
        let today = fetch(theDay).then(
            todayweather => todayweather.json()
        ).then(todayObj => {

            console.log(todayObj);

            currentLat = todayObj.coord.lat;
            currentLong = todayObj.coord.lon;
            // loadCurrentWeather2(url_Dayof + currentLat + url_DayofPT2 + currentLong + exclude + "hourly,minutely,alerts" + imperialConv + apikey);

        });
    };

    function loadCurrentWeather2(theDay2) {
        let today2 = fetch(theDay2).then(
            todayweather2 => todayweather2.json()
        ).then(today2Obj => {

            console.log(today2Obj);
            currentTemperature = Math.round(today2Obj.current.temp);
            currentMorningTemperature = Math.round(today2Obj.daily[0].temp.morn);
            currentNoonTemperature = Math.round(today2Obj.daily[0].temp.day);
            currentEveningTemperature = Math.round(today2Obj.daily[0].temp.eve);
            currentDescription = today2Obj.daily[0].weather[0].description;

            morningTempDay1 = Math.round(today2Obj.daily[1].temp.morn);
            morningTempDay2 = Math.round(today2Obj.daily[2].temp.morn);
            morningTempDay3 = Math.round(today2Obj.daily[3].temp.morn);
            morningTempDay4 = Math.round(today2Obj.daily[4].temp.morn);
            morningTempDay5 = Math.round(today2Obj.daily[5].temp.morn);

            noonTempDay1 = Math.round(today2Obj.daily[1].temp.day);
            noonTempDay2 = Math.round(today2Obj.daily[2].temp.day);
            noonTempDay3 = Math.round(today2Obj.daily[3].temp.day);
            noonTempDay4 = Math.round(today2Obj.daily[4].temp.day);
            noonTempDay5 = Math.round(today2Obj.daily[5].temp.day);

            eveningTempDay1 = Math.round(today2Obj.daily[1].temp.eve);
            eveningTempDay2 = Math.round(today2Obj.daily[2].temp.eve);
            eveningTempDay3 = Math.round(today2Obj.daily[3].temp.eve);
            eveningTempDay4 = Math.round(today2Obj.daily[4].temp.eve);
            eveningTempDay5 = Math.round(today2Obj.daily[5].temp.eve);

            highestTempDay1 = Math.round(today2Obj.daily[1].temp.max);
            highestTempDay2 = Math.round(today2Obj.daily[2].temp.max);
            highestTempDay3 = Math.round(today2Obj.daily[3].temp.max);
            highestTempDay4 = Math.round(today2Obj.daily[4].temp.max);
            highestTempDay5 = Math.round(today2Obj.daily[5].temp.max);

            lowestTempDay1 = Math.round(today2Obj.daily[1].temp.min);
            lowestTempDay2 = Math.round(today2Obj.daily[2].temp.min);
            lowestTempDay3 = Math.round(today2Obj.daily[3].temp.min);
            lowestTempDay4 = Math.round(today2Obj.daily[4].temp.min);
            lowestTempDay5 = Math.round(today2Obj.daily[5].temp.min);

            DescriptionDay1 = today2Obj.daily[1].weather[0].description;
            DescriptionDay2 = today2Obj.daily[2].weather[0].description;
            DescriptionDay3 = today2Obj.daily[3].weather[0].description;
            DescriptionDay4 = today2Obj.daily[4].weather[0].description;
            DescriptionDay5 = today2Obj.daily[5].weather[0].description;

            generalWeatherDD1 = today2Obj.daily[1].weather[0].main;
            generalWeatherDD2 = today2Obj.daily[2].weather[0].main;
            generalWeatherDD3 = today2Obj.daily[3].weather[0].main;
            generalWeatherDD4 = today2Obj.daily[4].weather[0].main;
            generalWeatherDD5 = today2Obj.daily[5].weather[0].main;

            switch (generalWeatherDD1) {
                case "Thunderstorm":
                    pic1.src = "http://openweathermap.org/img/wn/11d@2x.png"
                    break;

                case "Drizzle":
                    pic1.src = "http://openweathermap.org/img/wn/09d@2x.png"
                    break;

                case "Rain":
                    pic1.src = "http://openweathermap.org/img/wn/10d@2x.png"
                    break;

                case "Snow":
                    pic1.src = "http://openweathermap.org/img/wn/13d@2x.png"
                    break;

                case "Mist":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Smoke":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Haze":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Dust":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Fog":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Sand":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Ash":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Squall":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Tornado":
                    pic1.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;

                case "Clear":
                    pic1.src = "http://openweathermap.org/img/wn/01d@2x.png"
                    break;

                case "Clouds":
                    pic1.src = "http://openweathermap.org/img/wn/02d@2x.png"
            };

            switch (generalWeatherDD2) {
                case "Thunderstorm":
                    pic2.src = "http://openweathermap.org/img/wn/11d@2x.png"
                    break;

                case "Drizzle":
                    pic2.src = "http://openweathermap.org/img/wn/09d@2x.png"
                    break;

                case "Rain":
                    pic2.src = "http://openweathermap.org/img/wn/10d@2x.png"
                    break;

                case "Snow":
                    pic2.src = "http://openweathermap.org/img/wn/13d@2x.png"
                    break;

                case "Mist":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Smoke":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Haze":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Dust":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Fog":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Sand":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Ash":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Squall":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Tornado":
                    pic2.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;

                case "Clear":
                    pic2.src = "http://openweathermap.org/img/wn/01d@2x.png"
                    break;

                case "Clouds":
                    pic2.src = "http://openweathermap.org/img/wn/02d@2x.png"

            };

            switch (generalWeatherDD3) {
                case "Thunderstorm":
                    pic3.src = "http://openweathermap.org/img/wn/11d@2x.png"
                    break;

                case "Drizzle":
                    pic3.src = "http://openweathermap.org/img/wn/09d@2x.png"
                    break;

                case "Rain":
                    pic3.src = "http://openweathermap.org/img/wn/10d@2x.png"
                    break;

                case "Snow":
                    pic3.src = "http://openweathermap.org/img/wn/13d@2x.png"
                    break;

                case "Mist":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Smoke":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Haze":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Dust":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Fog":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Sand":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Ash":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Squall":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Tornado":
                    pic3.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;

                case "Clear":
                    pic3.src = "http://openweathermap.org/img/wn/01d@2x.png"
                    break;

                case "Clouds":
                    pic3.src = "http://openweathermap.org/img/wn/02d@2x.png"

            };

            switch (generalWeatherDD4) {
                case "Thunderstorm":
                    pic4.src = "http://openweathermap.org/img/wn/11d@2x.png"
                    break;

                case "Drizzle":
                    pic4.src = "http://openweathermap.org/img/wn/09d@2x.png"
                    break;

                case "Rain":
                    pic4.src = "http://openweathermap.org/img/wn/10d@2x.png"
                    break;

                case "Snow":
                    pic4.src = "http://openweathermap.org/img/wn/13d@2x.png"
                    break;

                case "Mist":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Smoke":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Haze":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Dust":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Fog":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Sand":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Ash":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Squall":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Tornado":
                    pic4.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;

                case "Clear":
                    pic4.src = "http://openweathermap.org/img/wn/01d@2x.png"
                    break;

                case "Clouds":
                    pic4.src = "http://openweathermap.org/img/wn/02d@2x.png"

            };

            switch (generalWeatherDD5) {
                case "Thunderstorm":
                    pic5.src = "http://openweathermap.org/img/wn/11d@2x.png"
                    break;

                case "Drizzle":
                    pic5.src = "http://openweathermap.org/img/wn/09d@2x.png"
                    break;

                case "Rain":
                    pic5.src = "http://openweathermap.org/img/wn/10d@2x.png"
                    break;

                case "Snow":
                    pic5.src = "http://openweathermap.org/img/wn/13d@2x.png"
                    break;

                case "Mist":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Smoke":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Haze":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Dust":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Fog":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Sand":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Ash":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Squall":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;
                case "Tornado":
                    pic5.src = "http://openweathermap.org/img/wn/50d@2x.png"
                    break;

                case "Clear":
                    pic5.src = "http://openweathermap.org/img/wn/01d@2x.png"
                    break;

                case "Clouds":
                    pic5.src = "http://openweathermap.org/img/wn/02d@2x.png"

            };

            citySearched.innerText = city;
            SpecificDate.innerText = todaysSpecificDate;
            currentDesc.innerText = currentDescription;
            currentDesc1.innerText = currentDescription;
            currentDesc2.innerText = currentDescription;
            currentDesc3.innerText = currentDescription;

            exactDate.innerText = todaysDate;
            currentTemp.innerText = currentTemperature + "°F";


            currentMorningTemp.innerText = currentMorningTemperature + "°F";
            currentNoonTemp.innerText = currentNoonTemperature + "°F";
            currentEveningTemp.innerText = currentEveningTemperature + "°F";

            day1.innerText = tomorrowSpecificDate + " " + tomorrowsDate;
            day2.innerText = tomorrowX2SpecificDate + " " + tomorrowX2;
            day3.innerText = tomorrowX3SpecificDate + " " + tomorrowX3;
            day4.innerText = tomorrowX4SpecificDate + " " + tomorrowX4;
            day5.innerText = tomorrowX5SpecificDate + " " + tomorrowX5;

            day1desc.innerText = DescriptionDay1;
            day2desc.innerText = DescriptionDay2;
            day3desc.innerText = DescriptionDay3;
            day4desc.innerText = DescriptionDay4;
            day5desc.innerText = DescriptionDay5;

            day1Temp.innerText = highestTempDay1 + "°F/" + lowestTempDay1 + "°F";
            day2Temp.innerText = highestTempDay2 + "°F/" + lowestTempDay2 + "°F";
            day3Temp.innerText = highestTempDay3 + "°F/" + lowestTempDay3 + "°F";
            day4Temp.innerText = highestTempDay4 + "°F/" + lowestTempDay4 + "°F";
            day5Temp.innerText = highestTempDay5 + "°F/" + lowestTempDay5 + "°F";

        });
    };
