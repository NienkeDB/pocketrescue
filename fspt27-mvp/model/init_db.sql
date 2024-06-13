--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists pokemon;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE pokemon(
    main_id INT NOT NULL AUTO_INCREMENT, 
    pokemon_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    caught INT UNSIGNED DEFAULT 0,
    storage INT UNSIGNED DEFAULT 0,
    img VARCHAR(1000) NOT NULL,  
    PRIMARY KEY (main_id),
    UNIQUE KEY (pokemon_id)
    );


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);