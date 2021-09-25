const geoCity = require("./utils/geoCity");

geoCity("Shimoga", (error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
