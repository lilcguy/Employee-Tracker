DROP DATABASE IF EXISTS 12_db;
CREATE DATABASE 12_db;

USE 12_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY
    name VARCHAR(30)
);


CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY
    title VARCHAR(30)
    salary DECIMAL
    department_ID INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INT 
    manager_id INT
);
