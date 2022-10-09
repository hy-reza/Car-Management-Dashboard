const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require('method-override')
require("dotenv").config();
const { PORT, APP_NAME, APP_VERSION } = process.env;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
app.use(express.static("views"));
app.use(methodOverride("_method"))

//frontend
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use('/', require("./routes/pageRoutes.js"))


//backend
app.get("/api/v1", (req, res, next) => {
  try {
    res.status(200).json(`Welcome to ${APP_NAME} API v${APP_VERSION}!`);
  } catch (e) {
    console.error(e.message);
  }
});
app.use("/api/v1/cars", require("./routes/carRoutes.js"));


app.use((req, res) => {
  res.status(404);
  res.send(`<center><h1>404 Not Found</h1></center>`);
});


//listen
app.listen(PORT || 3000, () => {
  console.info(`Server allready listening for requests on port ${PORT}...`);
});
