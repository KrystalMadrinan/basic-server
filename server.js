'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

// How front and back end get connected
app.use(express.static('./public'));

const PORT = process.env.PORT;

// app.get('/', (request, response) => {
//     response.send('Hello from the back side');
// })

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`); 
})