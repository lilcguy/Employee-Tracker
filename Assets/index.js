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
                    name: 'add'
                    }
                ]) .then((response) => {
                    console.log(response); //HELP WITH INSERT (and also update) STATEMENT HERE --V
                        db.query('INSERT INTO department (name) VALUES = ?', (response), (err, result) => {
                            console.log(result);
                        })
                }); 
                
        } 
        if (response.choice === 'Add a role') {
            console.log('Add a role chosen');
        } 
        if (response.choice === 'Add an employee') {
            console.log('Add an employee chosen');
        } 
        if (response.choice === 'Update an employee role') {
            console.log('Update an employee role chosen');
        } 
    });


