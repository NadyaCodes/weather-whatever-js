//get weather constants
const key = process.env.REACT_APP_WEATHER_API_KEY;
const host = process.env.REACT_APP_WEATHER_API_HOST;

if (key === undefined) {
  throw new Error(
    "No Open Weather API Key defined - ensure you set a variable called WEATHER_API_KEY"
  );
}

if (host === undefined) {
  throw new Error(
    "No Open Weather API Key defined - ensure you set a variable called WEATHER_API_HOST"
  );
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  },
};

const getWeather = async (location, setCurrentWeather) => {
  try {
    const data = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
      options
    );

    if (!data.ok) {
      return console.log("Hi from helper function - please pick a valid city");
    }

    const jsonData = await data.json();
    setCurrentWeather(jsonData);
  } catch (err) {
    console.log("line 47 error from helpers.js");
    console.log(err.message);
  }
};

const imageObject = {
  cold: "./images/cold.png",
  frigid: "./images/frigid.png",
  happySun: "./images/happySun.png",
  hot: "./images/hot.png",
  ski: "./images/ski.png",
  sleepy: "./images/sleepy.png",
  warm: "./images/warm.png",
  weird: "./images.weird.png",
};

module.exports = { getWeather, options, imageObject };
