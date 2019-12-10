const app = require('express')()

app.get('/', (req, res) => {
  res.send("TST");
});
 
module.exports.app = app;
