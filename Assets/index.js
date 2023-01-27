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
        console.log(response);

        if (response.choice === 'View All Departments') {
            console.log('View All Departments chosen');
               db.query('SELECT * FROM department', function (err, results) {
                console.log(results);
               })
                

        }

        if (response.choice === 'View all roles') {
            console.log('View All roles chosen');
               db.query('SELECT * FROM role', function (err, results) {
                console.log(results);
               })
                

        }

        if (response.choice === 'View all employees') {
            console.log('View all employees chosen');
                db.query('SELECT * FROM employee', function (err, results) {
                    console.log(results);
                })
        }
        if (response.choice === 'Add a department') {
            console.log('Add a department chosen');
                inquirer.prompt([
                    {
                    type: 'input',
                    message: 'What is the name of the department?',
                    name: 'department'
                    }
                    
                ]) .then((response) => {
                    console.log(response); //HELP WITH INSERT (and also update) STATEMENT HERE --V
                        db.query('INSERT INTO department (name) VALUES (?)', response.department, function (err, results) {
                            console.log(results);
                        })
                        
                }); 
                
        } 
        if (response.choice === 'Add a role') {
            console.log('Add a role chosen');
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the title of the role?',
                        title: 'role'
                    }
                ]) .then((response) => {
                    db.query('INSERT INTO role (title) VALUES (?)', response.title, function (err, results) {
                        console.log(results);
                    });
                });

                
        } 
        if (response.choice === 'Add an employee') {

            console.log('Add an employee chosen');
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
                    console.log(response.employee_first, response.employee_last);
                    
                    db.query('INSERT INTO employee (first_name, last_name) VALUES (?,?) ', [response.employee_first, response.employee_last],  function (err, results) {
                        console.log(results);
                    });
                    
                }
            );
        }
        if (response.choice === 'update an employee role') {
            console.log('Update an employee role chosen');
            // Run a query to get all users
            // first_name + last_name
            // SELECT name, manfacturer, id
            //   FROM products
            // => resultSet
            // items = []
            // for (let i = 0; i < resultSet.length; i++) {
            //      items.push({ name: product.manufacturer + product.name, value: product.id })
            // }
            db.query('SELECT first_name, last_name, id FROM employee', function (err, results) {

                users = [];
                for (let i=0; i < results.length; i++) {
                    let currResult = results[i];
                    users.push({name: currResult.first_name + currResult.last_name, value: currResult.id})
                }
              
                    inquirer.prompt([
                        {
                            type: 'list',
                            message: 'What is the ID of the employee?',
                            name: 'employee_id',
                            choices: users
                        },
                        {
                            type: 'input',
                            message: 'What is the role ID of the new role?',
                            name: 'role_id'
                        }
                    ]) .then((response) => {
                        console.log(response.employee_id, response.role_id);
                            db.query('UPDATE employee SET role_id = ? WHERE id = ?', [response.role_id, response.employee_id], function (err, results) {
                                console.log(results);
                            })
                    })
            }
            )

        } 
    
    });

//add cTable functionality
//update: set update table name set ?, where clause
//column to set 


