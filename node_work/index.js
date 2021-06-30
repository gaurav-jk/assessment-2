const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const HttpError = require("./utils/http-error");
const userRoute = require("./Routes/userRoute");
const port = 3000;

app.use(bodyParser.json());

app.use("https://jsonplaceholder.typicode.com", userRoute);


app.use((req, res, next) => {
  const error = new HttpError("Page Not Found", 404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.json({
    message: error.message || "Unknown Erroe Occured",
    code: error.code,
  });
});

app.listen(port , () => {
    console.log("Server Started")
})
