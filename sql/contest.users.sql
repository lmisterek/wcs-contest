DROP DATABASE IF EXISTS contest;
CREATE DATABASE contest;

USE contest;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(45) NULL,
  lastname VARCHAR(45) NULL,
  username VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  pass_word VARCHAR(200) NULL,
  PRIMARY KEY (id)
);

USE contest;
SELECT * from users;