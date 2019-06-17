const express = require('express');
const app = express();
const router = require('./routes');

app.use(parser.json());
app.use(router);


app.listen(4300, (req, res) => {
    console.log('Server running...');
});

//localhost:4200/api/customers
//POST/GET