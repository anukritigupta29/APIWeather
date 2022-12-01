
function fetchData(){
  
    const inputLocation =document.getElementById('loc').value;
    const accessKey= document.getElementById('key').value;

    if(inputLocation==='')
    {
        alert('Location or API key cannot be empty!')

    }

   
     
    //const url = "http://api.weatherstack.com/current?access_key=b4c9c53945a0a7a0c879c8618d05a74d&query="+inputLocation;

    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputLocation}?unitGroup=metric&key=${accessKey}&contentType=json`


    fetch(url)
        .then(a=>a.json())

        

                .then(json => {
                console.log(json)

          weatherData = json;
            document.getElementById('loca').innerText = weatherData.address
            document.getElementById('lat').innerText = weatherData.latitude
            document.getElementById('long').innerText = weatherData.longitude

            document.getElementById('timezone').innerText = weatherData.timezone
            document.getElementById('windSpeed').innerText = weatherData.days[0].windspeed
            document.getElementById('pressure').innerText = weatherData.days[0].pressure
            document.getElementById('humidity').innerText = weatherData.days[0].humidity

            document.getElementById('wind_dir').innerText = weatherData.days[0].winddir
            document.getElementById('uv_index').innerText = weatherData.days[0].uvindex
            document.getElementById('feelslike').innerText = weatherData.days[0].feelslike


            // document.getElementById('Location').innerText=response.location.country;
            // document.getElementById('Lat').innerText=response.location.lat;
            // document.getElementById('Long').innerText=response.location.lon;
            // document.getElementById('Timezone').innerText=response.location.timezone_id;
            // document.getElementById('WindSpeed').innerText=response.current.wind_speed;
            // document.getElementById('Pressure').innerText=response.current.pressure;
            // document.getElementById('Humidity').innerText=response.current.humidity;
            // document.getElementById('WindDirection').innerText=response.current.wind_dir;
            // document.getElementById('UVIndex').innerText=response.current.uv_index;
            // document.getElementById('FeelsLike').innerText=response.current.feelslike;
       

        });
      

 }
       
       

