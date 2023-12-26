let apikey = "de06430fdd01c782f6a26a54930ee6ef";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


document.querySelector("button").addEventListener("click",() =>{
    let city = document.querySelector("input").value;
    checkWeather(city)
    document.querySelector('input').value = ''
})

async function checkWeather(city){
    await fetch(apiurl +`&q=${city}` + `&appid=${apikey}`)
    .then((response) =>{
        let data = response.json();
        return data
    })
    .then((data) =>{
        
        if(city.toUpperCase() === data.name.toUpperCase()){

                
                document.querySelector('#error').style.display = "none"
                document.querySelector('#temp').style.visibility = "visible"
                document.querySelector('#info').style.visibility = "visible"

                let temperature = data.main.temp

                document.querySelector("#temperature").innerText = `${temperature}°C`
                document.querySelector('#city').innerText = `${data.name}`
                document.querySelector('#humidity').innerText = `${data.main.humidity}`
                document.querySelector('#wind').innerText = `${data.wind.speed} km/h`

                let weatherImg = document.querySelector('#weatherImg');
                let weather =  data.weather[0].main
            
                switch(weather){
                    case 'Clear': 
                                weatherImg.setAttribute('src',"images/clear.png");
                    break;
                    case 'Rain': 
                                weatherImg.setAttribute('src',"images/rain.png");
                    break;
                    case 'Drizzle': 
                                weatherImg.setAttribute('src',"images/drizzle.png");
                    break;  
                    case 'Clouds': 
                                weatherImg.setAttribute('src',"images/clouds.png");
                    break;
                    case 'Mist': 
                                weatherImg.setAttribute('src',"images/mist.png");
                    break;
                    case 'Snow': 
                                weatherImg.setAttribute('src',"images/snow.png");
                    break;  
                    default: "Weather details not available";
                }
            

        }
    })
    .catch((error) =>{
        console.log(error)
        document.querySelector('#error').style.display = "block"
        document.querySelector('#temp').style.visibility = "hidden"
        document.querySelector('#info').style.visibility = "hidden"
    })

    
    
    
}
