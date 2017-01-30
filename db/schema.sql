-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured TINYINT(1) DEFAULT 0,
created_at TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);