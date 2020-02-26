let express = require("express");
let fruit = require("./fruit");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/fruit", fruit);

app.listen(3001);
