const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root', //mysql username
      password: 'xj9?c011n', //mysql password
      database: '12_db'
    },
    console.log(`Connected to the 12_db database.`)
  );



inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'update an employee role'],
            name: 'choice'
        }
    ])

    .then((response) => { 
        //console.log(response);

        if (response.choice === 'View All Departments') { 
            console.log('Viewing all departments.');
               db.query('SELECT * FROM department', function (err, results) {
                departments = [];
                for (let i=0; i < results.length; i++) {
                    let currResult = results[i];
                    departments.push({id: currResult.id, name: currResult.name});
                }
                console.table(departments);
                //console.log(results);
                
               })
                

        }

        if (response.choice === 'View all roles') { 
            console.log('Viewing All roles.');
               db.query('SELECT * FROM role', function (err, results) {
                roles = [];
                for (let i=0; i < results.length; i++) {
                    let currResult = results[i];
                    roles.push({id: currResult.id, title: currResult.title, salary: currResult.salary, department_id: currResult.department_id});
                }
                console.table(roles);
                
               })
                

        }

        if (response.choice === 'View all employees') { //add c table
            console.log('Viewing all employees.');
                db.query('SELECT * FROM employee', function (err, results) {
                    employees = [];
                for (let i=0; i < results.length; i++) {
                    let currResult = results[i];
                    employees.push({id: currResult.id, name: currResult.first_name + " " + currResult.last_name, role_id: currResult.role_id, manager_id: currResult.manager_id });
                }
                console.table(employees);
                    
                })
        }
        if (response.choice === 'Add a department') {
            console.log('Adding a department.');
                inquirer.prompt([
                    {
                    type: 'input',
                    message: 'What is the name of the department?',
                    name: 'department'
                    }
                    
                ]) .then((response) => {
                    //console.log(response); 
                        db.query('INSERT INTO department (name) VALUES (?)', response.department, function (err, results) {
                            console.log("Added a department: " + response.department);
                        })
                        
                }); 
                
        } 
        if (response.choice === 'Add a role') {
            console.log('Adding a role.');
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the title of the role?',
                        name: 'role'
                    },
                    {
                        type: 'number',
                        message: 'What is the salary of this role?',
                        name: 'salary'
                    },
                    {
                        type: 'input',
                        message: 'What is the department ID?',
                        name: 'department_id'
                    }
                ]) .then((response) => {
                    db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [response.role, response.salary, response.department_id]), function (err, results) {
                        console.log("Added a role: " + results.role);
                    };
                });

                
        } 
        if (response.choice === 'Add an employee') {

            console.log('Adding an employee.');
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the first name of the employee?',
                        name: 'employee_first',
                    
                    },
                    {
                        type: 'input',
                        message: 'What is the last name of the employee?',
                        name: 'employee_last'
                    }
                ]) .then((response) => {
                    //console.log(response.employee_first, response.employee_last);
                    
                    db.query('INSERT INTO employee (first_name, last_name) VALUES (?,?) ', [response.employee_first, response.employee_last]);
                
                    
                }
            );
        }
        if (response.choice === 'update an employee role') {
            console.log('Updating an employee role.');
            
            db.query('SELECT first_name, last_name, id FROM employee', function (err, results) {

                users = [];
                for (let i=0; i < results.length; i++) {
                    let currResult = results[i];
                    users.push({name: currResult.first_name + currResult.last_name, value: currResult.id})
                }
              
                    inquirer.prompt([
                        {
                            type: 'list',
                            message: 'What is the name of the employee?',
                            name: 'employee_id',
                            choices: users
                        },
                        {
                            type: 'input',
                            message: 'What is the role ID of the new role?',
                            name: 'role_id'
                        }
                    ]) .then((response) => {
                        //console.log(response.employee_id, response.role_id);
                            db.query('UPDATE employee SET role_id = ? WHERE id = ?', [response.role_id, response.employee_id], function (err, results) {
                                console.log("Updated employee role to: " + response.role_id + ".");
                            })
                    })
            }
            )

        } 
    
    });




