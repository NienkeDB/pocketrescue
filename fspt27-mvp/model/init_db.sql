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
    api_id INT NOT NULL,
    name VARCHAR(255) NOT NULL, 
    image_url VARCHAR(255),
    types VARCHAR(255),
    PRIMARY KEY (main_id)
    );
