const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from prefinal!");
});
 
module.exports.app = app;
