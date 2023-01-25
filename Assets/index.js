const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root', //mysql username
      password: 'xj9?c011n', //mysql password
      database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
  );




inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'update an employee role'],
            name: 'choice'
        }
    ])

    .then((response) => {
        console.log(response);

        if (response.choice === 'View All Departments') {
            console.log('View All Departments chosen')
        }
        if (response.choice === 'View all employees') {
            console.log('View all employees chosen')
        }
        if (response.choice === 'Add a department') {
            console.log('Add a department chosen')
        } 
        if (response.choice === 'Add a role') {
            console.log('Add a role chosen')
        } 
        if (response.choice === 'Add an employee') {
            console.log('Add an employee chosen')
        } 
        if (response.choice === 'Update an employee role') {
            console.log('Update an employee role chosen')
        } 
    });


