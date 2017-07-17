
USE contest;

 CREATE TABLE participants (
  bib_number INT NOT NULL,
  lastname VARCHAR(45) NULL,
  firstname VARCHAR(45) NULL,
  division VARCHAR(45) NULL,
  role VARCHAR(45) NULL,
  prelim_results VARCHAR(200) NULL,
);

-- Seed database
USE contest;
INSERT INTO participants(bib_number, lastname, firstname, division, role)
VALUES  
(120, 'Frank', 'Olivia', 'Juniors', 'follow'),
(130, 'Johnson', 'Mandy', 'Juniors', 'follow'),
(140, 'Thompson', 'Jessica', 'Juniors', 'follow'),
(150, 'Misterek', 'Ashlynn', 'Juniors', 'follow'),
(160, 'Misterek', 'Annabelle', 'Juniors', 'follow'),
(170, 'Misterek', 'Selah', 'Juniors', 'follow'),
(180, 'Oliveira', 'Sandra', 'Juniors', 'follow'),
(220, 'Rider', 'Nicholas', 'Juniors', 'leader'),
(230, 'Thompson', 'Dean', 'Juniors', 'follow'),
(240, 'Polo', 'Marco', 'Juniors', 'follow'),
(250, 'Salazar', 'Trevor', 'Juniors', 'follow'),
(260, 'Jones', 'Brian', 'Juniors', 'follow'),
(270, 'Wilson', 'Jordan', 'Juniors', 'follow'),
(280, 'Moore', 'Casey', 'Juniors', 'follow');

USE contest;
SELECT * from participants;
