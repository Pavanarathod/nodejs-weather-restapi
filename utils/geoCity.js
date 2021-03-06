const request = require("request");

const geoCity = (cityName, cityData) => {
  const url = ``;
  request(
    {
      url: url,
      json: true,
    },
    (error, response) => {
      if (error) {
        cityData("Unable to connect to lacation data..", undefined);
      } else {
        cityData(
          undefined,
          `this is currently ${response.body.current.temperature} degrees out, And feels like ${response.body.current.weather_descriptions}`
        );
      }
    }
  );
};

module.exports = geoCity;
