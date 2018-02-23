const express = require('express');
const app = express();

/*GET route handler, takes in a route and a callback that gets called when a
  request of that type arrives at that route*/
app.get('/', (request, response) => {
  response.send({ name: 'Emilio Vargas' });
});

const PORT = process.env.PORT || 5000;
// Tells Node to listen on Port 5000
app.listen(PORT);
