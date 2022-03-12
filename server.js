const mysql = require('mysql2');
const express = require('express')
const inputCheck = require('./utils/inputCheck')

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'hskid1',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Default response for any other request (Not Found)
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


