const express = require('express');
const app = express();

// Home Page
app.get('/', (req, res) => {
  res.status(200).send('Home Page');
  console.log('user hit the home page');
});

// About Page
app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

// Error Page
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
  console.log('The server is listening on port 5000');
});

// Represents HTTP Methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
