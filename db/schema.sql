CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(25),
    devoured BOOLEAN
);