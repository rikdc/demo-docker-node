
const port = process.env.PORT || 8080;

const express = require("express");
const app = express();


const router = express.Router();

const path = __dirname + "/views/";

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

app.use(express.static(path));
app.use("/", router);

app.listen(port, function () {
  console.log(`Example app listening on ${port}!`);
});



