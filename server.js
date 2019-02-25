'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello Felipe World Test Number</h1>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
