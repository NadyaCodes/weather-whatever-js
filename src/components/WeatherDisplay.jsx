import React, {useState, useEffect} from 'react';

const key = 'd643c5402emsha450cb7a09a05eap17cb31jsn455e19d53ba1'
const host = 'weatherapi-com.p.rapidapi.com'

if (key === undefined) {
  throw new Error('No Open Weather API Key defined - ensure you set a variable called WEATHER_API_KEY')
}

if (host === undefined) {
  throw new Error('No Open Weather API Key defined - ensure you set a variable called WEATHER_API_HOST')

}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': host
	}
};



export default function WeatherDisplay(props) {
  const [currentWeather, setCurrentWeather] = useState({})
  useEffect(() => {

    const getWeather = async () => {
      try {
        const data = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${props.name}`, options)
        const jsonData = await data.json()
        setCurrentWeather(jsonData)
        console.log("currentWeather", currentWeather)
      } catch(err) {
        console.log(err.message)
      } 

    }
    getWeather()

  }, [props.name])
  
  return(
    <div>
      {currentWeather.location !== undefined && <div><h1>This is the weather at {props.name || "wherever this place is"}</h1>{currentWeather.current.temp_c} C</div>}
    </div>
  )
}