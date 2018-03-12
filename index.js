const express = require('express');
const app = express();

var port = process.env.PORT || 80;

app.get('/Results.aspx', (req, res) => {
  const errMessage = JSON.stringify({"ErrorReturningXML": "true"});
  res.append("Content-Type", "application/json;charSet=UTF-8");
  res.send(errMessage);
});

app.listen(port, () => console.log('Example app listening on port 80!'));
