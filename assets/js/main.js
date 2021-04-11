function updateTimer() {
    let today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $('#currentDay').text(today);
        //console.log(today)
       }
    $(window).on("load", function () {
        setInterval(updateTimer, 1000);
        document.getElementById('searchField').value = 'Boston'; //COMMENT AFTER DONE WITH TESTING
            });


    //API key from api.openwathermap.org
    let APIkey = "e49730559f8a8fcd8b09aac99f1d0533";
    let searchHTML = document.getElementById("submitButton");
    let lat;
    let lon;

    // upon click of submit button, 
    searchHTML.addEventListener("click", function(){
    //let queryURL ="http://api.openweathermap.org/data/2.5/forecast?q="
    let queryURL ="http://api.openweathermap.org/data/2.5/weather?q="
    //let queryURL ="api.openweathermap.org/data/2.5/forecast?q="
    let cityHTML = document.getElementById("searchField");
    console.log(cityHTML.value);
    let fullURL = queryURL+cityHTML.value+"&appid="+APIkey+"&units=imperial";
    console.log(fullURL);
    //var myBody;
  
    fetch(fullURL)
    .then(function (response) {
    //let wind = response.main.humidity;
    //console.log(wind);
    //console.log(response.base);
    return response.json();
    
    })
    .then(function (data) {
    console.log(data);
    let city = data.name;
    let humidity = data.main.humidity;
    let temp = data.main.temp;
    let windspeed = data.wind.speed;
    let icon = data.weather[0].icon;
    lat = data.coord.lat;
    lon = data.coord.lon;
    console.log(humidity);
    console.log(temp);
    console.log(windspeed);
    console.log(icon);
    console.log(city);
    console.log(lat);
    console.log(lon);

    let weathericonurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
    console.log(weathericonurl);
    let icon0html = document.getElementById("icon0");
    //icon0html.src = weathericonurl;
    icon0html.src = weathericonurl;

    //let temp0html = document.getElementById("temp0");
    //temp0html.value = String(temp);
    //console.log(temp0html);
    console.log(temp);

    $('#selectArea').text("City = "+city);

    $('#temp0').text("Temp = "+temp + "	\xB0" + "F");

    $('#wind0').text("Wind = "+windspeed + " " + "Mph");

    $('#humid0').text("Humidity = "+humidity + "%");
    
    getForecast(lat,lon,city);

    });
});

     // upon click of submit button, 
   function getForecast(latp, lonp, cityp){
        //let queryURL ="http://api.openweathermap.org/data/2.5/forecast?q="
        let queryURLForecast ="http://api.openweathermap.org/data/2.5/onecall?lat="
        //let queryURL ="api.openweathermap.org/data/2.5/forecast?q="
        let cityHTML = document.getElementById("searchField");
        console.log(cityHTML.value);
        let fullURLForecast = queryURLForecast+latp+"&lon="+lonp+"&exclude=current,minutely,hourly,alerts"+"&appid="+APIkey+"&units=imperial&cnt=5";
        console.log(fullURLForecast);
        console.log("I ran the second event listener");
        //var myBody;
      
        fetch(fullURLForecast)
        .then(function (responseforecast) {
        //let wind = response.main.humidity;
        //console.log(wind);
        //console.log(response.base);
        return responseforecast.json();
        
        })
        .then(function (dataforecast) {
        console.log(dataforecast);  
        //https://stackoverflow.com/questions/4631928/convert-utc-epoch-to-local-date/22237139#:~:text=getTime()%20returns%20milliseconds%20from,timestamp%20by%20multiplying%20by%201000.&text=To%20convert%20the%20current%20epoch,to%20disable%2012%2Dhour%20format.
        
        
        let timestamp1 = dataforecast.daily[1].dt
        let date1 = new Date(timestamp1 * 1000);
        let temp1 = dataforecast.daily[1].temp.day;
        let icon1 = dataforecast.daily[1].weather[0].icon;
        let windspeed1 = dataforecast.daily[1].wind_speed;
        let humidity1 = dataforecast.daily[1].humidity;
        let uvindex1 = dataforecast.daily[1].uvi;
        console.log(timestamp1);
        console.log(date1);
        console.log(temp1);
        console.log(icon1);
        console.log(windspeed1);
        console.log(humidity1);
        console.log(uvindex1);

        let weathericonurl1 = "http://openweathermap.org/img/wn/"+icon1+"@2x.png";
        console.log(weathericonurl1);
        let icon1html = document.getElementById("icon1");
        icon1html.src = weathericonurl1;
        

        $('#selectArea').text("City = "+cityp);
    
        $('#temp1').text("Temp = "+temp1 + "	\xB0" + "F");
    
        $('#wind1').text("Wind = "+windspeed1 + " " + "Mph");
    
        $('#humid1').text("Humidity = "+humidity1 + "%");

        /*
        let city = dataforecast.name;
        let humidity = dataforecast.main.humidity;
        let temp = dataforecast.main.temp;
        let windspeed = dataforecast.wind.speed;
        let icon = dataforecast.weather[0].icon;
        console.log(humidity);
        console.log(temp);
        console.log(windspeed);
        console.log(icon);
        console.log(city);
    
        let weathericonurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        console.log(weathericonurl);
        let icon0html = document.getElementById("icon0");
        //icon0html.src = weathericonurl;
        icon0html.src = weathericonurl;
    
        //let temp0html = document.getElementById("temp0");
        //temp0html.value = String(temp);
        //console.log(temp0html);
        console.log(temp);
    
        $('#selectArea').text("City = "+city);
    
        $('#temp0').text("Temp = "+temp + "	\xB0" + "F");
    
        $('#wind0').text("Wind = "+windspeed + " " + "Mph");
    
        $('#humid0').text("Humidity = "+humidity + "%");
        */
        })
    };

    
/*

    function getApi(fullURL) {
        fetch(fullURL)
          .then(function (response) {
            console.log(response);
            return response.json();
        });
      };

      let myBody = getApi(fullURL);
      console.log(myBody);
*/
    /*
    fetchResult = fetch(fullURL, {
        method: 'GET',
        //body: myBody, // string or object
        headers: {
          'Content-Type': 'application/json'
        }
      });
    */
      /*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */
/*
      fetch(fullURL)
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => myBody)
      ;
     // response = myBody;
      console.log(myBody);
    //fetchJSON = fetchResult.json();
    //console.log(fetchJSON);
    //console.log(fetchResult);
*/
    

    
    //{city name}&appid={API key}";

    //Get api data for user selected city for current day 
    // HTML ids: city- #selectArea, #date0, #icon0, #temp0, #wind0, #humid0, #uvIndex0


    //Get api data for user selected city for day 1
    // HTML ids:  #date1, #icon1, #temp1, #wind1, #humid1


    //Get api data for user selected city for day 2
    // HTML ids:  #date2, #icon2, #temp2, #wind2, #humid2


    //Get api data for user selected city for day 3
    // HTML ids:  #date3, #icon3, #temp3, #wind3, #humid3


    //Get api data for user selected city for day 4
    // HTML ids:  #date4, #icon4, #temp4, #wind4, #

    
    //Get api data for user selected city for day 5
    // HTML ids:  #date5, #icon5, #temp5, #wind5, #humid5