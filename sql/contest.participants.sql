
USE contest;
DROP TABLE people;

USE contest;
 CREATE TABLE participants (
  id INT NOT NULL AUTO_INCREMENT,
  bib_number INT NOT NULL,
  lastname VARCHAR(45) NULL,
  firstname VARCHAR(45) NULL,
  division VARCHAR(45) NULL,
  role VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

-- Seed database
USE contest;
INSERT INTO participants(bib_number, lastname, firstname, division, role)
VALUES  
(120, 'Frank', 'Olivia', 'juniors', 'follow'),
(130, 'Johnson', 'Mandy', 'juniors', 'follow'),
(140, 'Thompson', 'Jessica', 'juniors', 'follow'),
(150, 'Misterek', 'Ashlynn', 'juniors', 'follow'),
(160, 'Misterek', 'Annabelle', 'juniors', 'follow'),
(170, 'Misterek', 'Selah', 'juniors', 'follow'),
(180, 'Oliveira', 'Sandra', 'juniors', 'follow'),
(220, 'Rider', 'Nicholas', 'juniors', 'leader'),
(230, 'Thompson', 'Dean', 'juniors', 'leader'),
(240, 'Polo', 'Marco', 'juniors', 'leader'),
(250, 'Salazar', 'Trevor', 'juniors', 'leader'),
(260, 'Jones', 'Brian', 'juniors', 'leader'),
(270, 'Wilson', 'Jordan', 'juniors', 'leader'),
(280, 'Moore', 'Casey', 'juniors', 'leader');

USE contest;
INSERT INTO participants(bib_number, lastname, firstname, division, role)
VALUES  
(420, 'Frank', 'Olivia', 'novice', 'follow'),
(430, 'Johnson', 'Mandy', 'novice', 'follow'),
(440, 'Thompson', 'Jessica', 'novice', 'follow'),
(450, 'Misterek', 'Ashlynn', 'novice', 'follow'),
(460, 'Misterek', 'Annabelle', 'novice', 'follow'),
(470, 'Misterek', 'Selah', 'novice', 'follow'),
(480, 'Oliveira', 'Sandra', 'novice', 'follow'),
(520, 'Rider', 'Nicholas', 'novice', 'leader'),
(530, 'Thompson', 'Dean', 'novice', 'leader'),
(540, 'Polo', 'Marco', 'novice', 'leader'),
(550, 'Salazar', 'Trevor', 'novice', 'leader'),
(560, 'Jones', 'Brian', 'novice', 'leader'),
(570, 'Wilson', 'Jordan', 'novice', 'leader'),
(580, 'Moore', 'Casey', 'novice', 'leader');

USE contest;
SELECT * from participants WHERE division = 'juniors';

SLE