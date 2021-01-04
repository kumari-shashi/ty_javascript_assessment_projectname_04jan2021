// fetch('http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=cityname').then(res =>{
//       return res.json()
// }).then(data =>{
    
// const searchBox = document.getElementById('input-box');
// searchBox.addEventListener('keypress',(event) => {
//     if(event.keyCode == 13) {
//         console.log(searchBox.value);
//         getWeatherReport(searchBox.value);
//     }
    
// });

function getWeatherReport(city) {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=cityname').then(weather => {
        return weather.json();

    }).then (data => {
        console.log(data);
        
    });
   
}
getWeatherReport()
//  function showWeaterReport(weather) { 
//     console.log(weather );
//     let city = document.getElementById('city');
//     city.innerText = `${weather.nae}`
//  }