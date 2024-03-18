const fs = require("fs");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

module.exports = (req, res, next) => {
  // Getting Current Date and Time
  let t = new Date();

  // Generating Logger String
  let formattedString = `${req.ip} -- [${t.toLocaleString()}] ${req.method} ${
    req.url
  } ${res.statusCode} ${req.headers["user-agent"]}`;

  // If the Code is running in Production
  if (process.env.NODE_ENV == "production") {
    const dateObj = new Date();
    fs.appendFile(
      `./logs/${months[dateObj.getUTCMonth()]}-${dateObj.getUTCFullYear()}.txt`,
      `${formattedString}\n`,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  } else {
    // Development Environment
    console.log(formattedString);
  }
  next();
};
