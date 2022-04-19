const mysql = require('mysql2');
const express = require('express')
const inputCheck = require('./utils/inputCheck');
const { endianness } = require('os');
const inquirer = require('inquirer');
const { connect } = require('http2');

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
    inquier.prompt([
        {
            name: 'name', 
            type: 'input', 
            message: 'What is the department name?',
        }
    ]).then(answer => {
        db.query('INSERT INTO department SET ?', 
        
        {name: answer.department_name}, 
        
        (err) => {
            if (err) throw err;
            console.table(res);
            console.log("Department Successfully Added");
        })
    })
}

// Add a position (promt name, salery and department for the role)
function addPosition() {
    inquirer.prompt([
        {
            type: "input",
            name: "position_name", 
            message: "What is the position name?"
        }, 
        {
            type: "input", 
            name: "position_salary", 
            message: "What is this position's salary?"
        }, 
        {
            type: "input", 
            name: "position_deparmtnet_id", 
            message: "What is the department ID?"
        },
    ]).then(answer => {
        db.query('INSERT INTO position SET ?', 
        
        {
            title: answer.position_name,
            salary: answer.position_salary,
            department_id: answer.position_department_id
        }, 
        
        (err) => {
            if (err) throw err;
            console.table(res);
            console.log("Position Successfully Added");
        })
    })
}

// Add an employee (employee's first name, last name, role, manager)
function addEmployee() {
    inquirer.prompt([
        {
            type: "input", 
            name: "first_name", 
            message: "Employee's first name?"
        }, 
        {
            type: "input", 
            name: "last_name", 
            message: "Employee's last name?"
        }, 
        {
            type: "input", 
            name: "position_id", 
            message: "What is the employee's position ID?"
        }, 
    ]).then(answer => {
        db.query('INSERT INTO employee SET ?', 
        
        {
            first_name: answer.first_name,
            last_name: answer.last_name,
            position_id: answer.position_id,
        }, 
        
        (err) => {
            if (err) throw err;
            console.table(res);
            console.log("Department Successfully Added");
        })
    })
}
// Update an employee role (select an employee to update and their new role). 
function updatePosition(employees) {
    
    var query = `SELECT * FROM roles`;

    connect.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);

        const roles = res.map(({ id, title }) => ({
            value: id, name: `${title}`
        }));

        promptUpdate(employees, roles)
    })
}

function promptUpdate(employees, roles) {
    inquirer.prompt ([
        {
            type: "list", 
            name: "employee", 
            message: "Which employee are you updating?", 
            choices: employees
        },
        {
            type: "list", 
            name: "role", 
            message: "What is the employee's new role?", 
            choices: roles
        }
    ]).then(function (answer) {
        var query = `UPDATE employee SET role_id = ? WHERE id =?`

        connect.query(query,
            [
                answer.role, answer.employees
            ], 
            function (err, res) {
                if (err) throw err;
                console.table(res);
            })
    })
}

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Server actively listening here
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


