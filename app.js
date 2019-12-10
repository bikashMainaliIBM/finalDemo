const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from hope");
});
 
module.exports.app = app;
