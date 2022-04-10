const mysql = require('mysql2');
const express = require('express')
const inputCheck = require('./utils/inputCheck');
const { endianness } = require('os');

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

// Test message to make sure the server is running
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// view all departments
function viewDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;

        console.table(res);
    });
};

// view all positions
function viewPositions() {
    db.query('SELECT * FROM positions', (err, res) => {
        if (err) throw err;

        console.table(res);
    });
};

// view all employees 
function viewEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err; 

        console.table(res)
    });
};

// Add a department 
function addDepartment() {

}

// Add a position (promt name, salery and department for the role)
function addPosition() {

}

// Add an employee (employee's first name, last name, role, manager)

// Update an employee role (select an employee to update and their new role). 

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Server actively listening here
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


