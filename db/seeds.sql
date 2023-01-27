INSERT INTO department (name)
VALUES ("Production"), 
        ("Quality Assurance"), 
        ("Accounting"); 


INSERT INTO role (title, salary, department_id)
VALUES ('Production Team Lead', 10.1, 1),
        ('Production Lead Assistant', 8.3, 1),
        ('Production Team Member', 5.6, 1),

        ('QA Team Lead', 16.13, 2),
        ('QA Lead Assistant', 10.31, 2),
        ('QA Team Member', 8.66, 2),

        ('Accounting Team Lead', 24.42, 3),
        ('Accounting Lead Assistant', 16.44, 3),
        ('Accounting Team Member', 10.87, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
        ('Peter', 'Grenson', 1, 1),
        ('Mary', 'Canelope', 4, 2),
        ('Kansas', 'Bangus', 7, 3);
