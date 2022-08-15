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
  rain: "./images.rain.png",
  questionable: "./images/questionable.png",
};

const findImage = (props, setImage, setMessage) => {
  const nightString = "night";

  if (
    props.currentWeather.current !== undefined &&
    props.currentWeather.current.condition.icon.indexOf(nightString) >= 0
  ) {
    setImage(imageObject.sleepy);
    setMessage("It's night - why do you even want to know??");
  } else if (props.currentWeather.current.condition.text === "Rain") {
    setImage(imageObject.rain);
    setMessage("Rain, rain, go away...👀");
  } else if (
    props.currentWeather.current.condition.text === "Partly cloudy" ||
    props.currentWeather.current.condition.text === "Cloudy" ||
    props.currentWeather.current.condition.text === "Overcast"
  ) {
    setImage(imageObject.questionable);
    setMessage("It's not raining yet? But there's cloud, so it COULD rain...");
  } else if (props.currentWeather.current.temp_c >= 30) {
    setImage(imageObject.hot);
    setMessage("Too. Freaking. Hot.");
  } else if (props.currentWeather.current.temp_c >= 25) {
    setImage(imageObject.warm);
    setMessage("Hot. But, manageable 🤷‍♀️");
  } else if (
    props.currentWeather.current.temp_c >= 15 &&
    props.currentWeather.current.condition.text === "Sunny"
  ) {
    setImage(imageObject.happySun);
    setMessage("Juuuuuuuuust right.");
  } else if (props.currentWeather.current !== undefined) {
    setImage(props.currentWeather.current.condition.icon);
    setMessage("");
  } else {
    setImage("");
    setMessage("");
  }
};

module.exports = { getWeather, options, findImage };
