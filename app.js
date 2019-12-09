const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from prefinall!");
});
 
module.exports.app = app;
