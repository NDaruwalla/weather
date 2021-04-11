function updateTimer() {
    let today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $('#currentDay').text(today);
   
    //console.log(today)

    
    }
    $(window).on("load", function () {
        setInterval(updateTimer, 1000);
    
        });


    
        let APIkey = "e49730559f8a8fcd8b09aac99f1d0533";

    let queryURL ="api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";