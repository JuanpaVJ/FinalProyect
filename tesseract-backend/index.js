const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const config = require("./config.js");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use("/apis", routes);

//!Listening
app.listen(config.server_port, () =>
  console.log(`Server running in port ${config.server_port}`)
);
