const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  server_port: process.env.PORT || 3000,
};
