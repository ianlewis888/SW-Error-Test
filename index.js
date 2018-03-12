const express = require('express');
const app = express();

var port = process.env.PORT || 80;

app.get('/Results.aspx', (req, res) => {
  const errMessage = JSON.stringify({"ErrorReturningXML": "true"});
  res.append("Content-Type", "application/json;charSet=UTF-8");
  res.append("Access-Control-Allow-Origin", "http://a.netmng.com");
  res.append("Access-Control-Allow-Credentials", "true");
  res.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.append("Access-Control-Expose-Headers", "");
  res.append("Cache-Control", "no-cache, no-transform");
  res.append("Expires", "-1");
  res.append("p3p", "policyref=\"http:\/\/a.netmng.com/w3c/p3p.xml\", CP=\"NOI DSP COR DEVa PSAa OUR BUS COM NAV\"")
  res.send(errMessage);
});

app.listen(port, () => console.log('Example app listening on port 80!'));
