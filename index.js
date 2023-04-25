const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a GET request.');

  const target = process.env.TARGET || 'World';
  res.send(`Thanks to Luke Schlangen for the sweet GKE tutorial! Tomorrow let's get a React App w PostgreSQL database deployed!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
