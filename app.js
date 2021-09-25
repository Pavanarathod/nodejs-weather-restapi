const geoCity = require("./utils/geoCity");

geoCity("Shimoga", (error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});

const myName = "Pavan Kumar";
const repeatMyName = () => myName;

const myFriendName = "Abhishek Jn";
const repeatMyFriendName = () => myFriendName;
