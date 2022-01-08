function getData(){
    console.log("Hello")
 let city=document.querySelector("#city").value;
 let statecode= document.querySelector("#statecode").value;
 let countrycode= document.querySelector("#countrycode").value;
 
    
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${statecode},${countrycode}&appid=f5eabee2c329bc6700f68f784299a4f2`)
 .then(response => response.json())
 .then(weatherdata => {
     console.log(weatherdata)
 
     let high= weatherdata.main.temp_max;
     let outputFahrenheit=((high-273.15)*1.8)+32;   
        console.log(high)           
     document.querySelector(`#high-0`).innerHTML=outputFahrenheit.toFixed(2);
 
     
 
     let low= weatherdata.main.temp_min;
     let low_1=((low-273.15)*1.8)+32;   
     console.log(low)           
     document.querySelector(`#low-0`).innerHTML=low_1.toFixed(2)
 
  
     let forecast= weatherdata.weather[0].main;
     console.log(forecast)           
     document.querySelector(`#forecast-0`).innerHTML=forecast
 
 
     let humidity= weatherdata.main.humidity;
     console.log(humidity)           
     document.querySelector(`#humidity-0`).innerHTML=humidity
 
 })
 }