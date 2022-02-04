
const express = require("express")
const cors = require("cors");

//initializations
const app = express();
app.use(cors());
app.use(express.json());

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();

//server listen
const port = process.env.PORT || 5000;
app.listen(port,() => {
  console.log(`Server Initiated at ${port}`);
});