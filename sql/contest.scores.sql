
USE contest;
DROP TABLE IF EXISTS scores;

USE contest;
 CREATE TABLE scores (
  id INT NOT NULL AUTO_INCREMENT,
  bib_number INT NOT NULL,
  division VARCHAR(45) NOT NULL,
  round VARCHAR(45) NOT NULL,
  judge INT NOT NULL,
  score INT NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM scores;
