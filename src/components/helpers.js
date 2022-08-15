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
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`,
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
  weird: "./images/weird.png",
  rain: "./images/rain.png",
  questionable: "./images/questionable.png",
  fine: "./images/fine.png",
};

const findImage = (props, setImage, setMessage) => {
  const nightString = "night";
  const rainString = "rain";
  const cloudString = "cloud";
  const sunString = "sun";
  const snowString = "snow";
  console.log(props.currentWeather);

  if (
    props.currentWeather.current !== undefined &&
    props.currentWeather.current.condition.icon
      .toLowerCase()
      .indexOf(nightString) >= 0
  ) {
    setImage(imageObject.sleepy);
    setMessage("It's night - why do you even want to know??");
  } else if (
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf("thunder") >= 0 ||
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf("blizzard") >= 0 ||
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf("heavy") >= 0 ||
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf("sleet") >= 0 ||
    props.currentWeather.current.condition.text.toLowerCase().indexOf("ice") >=
      0 ||
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf("torrential") >= 0
  ) {
    setImage(imageObject.weird);
    setMessage("Be careful out there!!! It could get wild");
  } else if (
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf(rainString) >= 0
  ) {
    setImage(imageObject.rain);
    setMessage("Rain, rain, go away...👀");
  } else if (
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf(snowString) >= 0
  ) {
    setImage(imageObject.ski);
    setMessage("SNOW! That can only mean one thing...GET OUT THOSE GOGGLES!");
  } else if (
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf(cloudString) >= 0 ||
    props.currentWeather.current.condition.text === "Overcast" ||
    props.currentWeather.current.condition.text === "Mist" ||
    props.currentWeather.current.condition.text === "Fog"
  ) {
    setImage(imageObject.questionable);
    setMessage(
      "There's nothing falling from the sky yet? But there's cloud, so it COULD...👀"
    );
  } else if (props.currentWeather.current.temp_c >= 30) {
    setImage(imageObject.hot);
    setMessage("Too. Freaking. Hot.");
  } else if (props.currentWeather.current.temp_c >= 25) {
    setImage(imageObject.warm);
    setMessage("Hot, but manageable 🤷‍♀️");
  } else if (
    props.currentWeather.current.temp_c >= 15 &&
    props.currentWeather.current.condition.text
      .toLowerCase()
      .indexOf(sunString) >= 0
  ) {
    setImage(imageObject.happySun);
    setMessage("Juuuuuuuuust right.");
  } else if (props.currentWeather.current.temp_c <= 0) {
    setImage(imageObject.cold);
    setMessage("It's a little chilly, but it's not too bad!");
  } else if (props.currentWeather.current.temp_c <= -15) {
    setImage(imageObject.frigid);
    setMessage("STAY INSIDE - IT'S NOT WORTH IT OUT THERE!!!");
  } else if (props.currentWeather.current !== undefined) {
    setImage(imageObject.fine);
    setMessage("It's fine, I guess...not GREAT, but it could be worse...");
  } else {
    setImage("");
    setMessage("");
  }
};

module.exports = { getWeather, options, findImage };
