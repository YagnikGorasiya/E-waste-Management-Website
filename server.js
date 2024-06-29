// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const userRoutes = require('./routes/user');
const collectionRoutes = require('./routes/collection');
const recyclerRoutes = require('./routes/recycler');
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'e_waste_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use('/user', userRoutes);
app.use('/collection', collectionRoutes);
app.use('/recycler', recyclerRoutes);
app.use('/payment', paymentRoutes);

app.listen(4002, () => {
    console.log('Server started on port')
});