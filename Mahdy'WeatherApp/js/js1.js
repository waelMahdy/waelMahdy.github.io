$(document).ready(function () {

    $('#submitWeather').click(function () {

        var city = $("#city").val();
        if (city != '') {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=e411bfc304e36e78d8c0206e47fd3453",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                   var widget=show(data);
                    
                    $("#show").html(widget);
                    $("#city").val('');
                }

            });

        } else {
            $("#error").html('Field can not be empty')
        }



    });
});
function show(data){
    
    //const iconcode = data.weather[0].icon;
    //const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

 //document.getElementById('wicon').src = iconurl ;
//  
//    $('wicon').html('src', iconurl);
    return "<h3 style='' class='text-center'><strong>Current weather for </strong>"+ data.name+", "+data.sys.country+"</h3>"+
         "<h3><strong>Weather</strong>: "+data.weather[0].main +"</h3>"+
        "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' >"  +data.weather[0].description +"</h3>"+
        "<h3><strong>Temprature</strong>: "+data.main.temp+" °C </h3>"+
        "<h3><strong>Humidity</strong>: "+data.main.humidity+" %</h3>"+
        "<h3><strong>Min-Temprature</strong>: "+data.main.temp_min+" °C</h3>"+
        "<h3><strong>Max-Temprature</strong>: "+data.main.temp_max+" °C</h3>"
    
    
  
    
    
    }
    
    

 