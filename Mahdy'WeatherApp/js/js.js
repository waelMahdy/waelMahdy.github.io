window.addEventListener("load", () => {
    let lat;
    let long;
    let tempratureDescription=document.querySelector('.temprature-description');
    let tempratureDegree=document.querySelector('.temprature-degree');
    let locationTimeZone=document.querySelector('.location-timezone');
    let tempratureSection=document.querySelector('.temprature')
    let tempratureSpan=document.querySelector('.temprature span')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            const prxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${prxy}https://api.darksky.net/forecast/60c679eabbb08446b23c09d5a2dea657/${lat},${long}`;


            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                const {temperature,summary,icon}=data.currently;
                //set DOM elements from the API
                tempratureDegree.textContent=temperature; 
                tempratureDescription.textContent=summary;
                locationTimeZone.textContent=data.timezone;
                
                //formula for celsius
                let celsius=(temperature-32)*(5/9);
                //set icon
                
                seticons(icon,document.querySelector(".icon"));
                
                //change temprature to Celsius C/Farhenheit F
                tempratureSection.addEventListener("click",()=>{
                  if(tempratureSpan.textContent==="F"){
                      tempratureSpan.textContent="C";
                      tempratureDegree.textContent=Math.floor(celsius);
                       }else{tempratureSpan.textContent="F";
                             tempratureDegree.textContent=Math.floor(temperature);
                             }                                   
                                                     
                });
                


                });
        });
    }
    
    function seticons(icon,iconId){
    const skyicons=new Skycons({color:"white"});
    const currentIcon=icon.replace(/-/g,"_").toUpperCase();
        skyicons.play();
        return skyicons.set(iconId,Skycons[currentIcon]);
    }
});
