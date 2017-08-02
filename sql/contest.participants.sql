
USE contest;
DROP TABLE IF EXISTS participants;

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
(120, 'Frank', 'Olivia', 'novice', 'follow'),
(130, 'Johnson', 'Mandy', 'novice', 'follow'),
(140, 'Thompson', 'Jessica', 'novice', 'follow'),
(150, 'Misterek', 'Ashlynn', 'novicd', 'follow'),
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
(430, 'Johnson', 'Mandy', 'novice', 'follow');

USE contest;
INSERT INTO participants (bib_number, lastname, firstname, division, role) VALUES (200, 'Bednar', 'Cristian', 'novice', 'lead'), (201, 'Torp', 'Arnoldo', 'novice', 'lead'), (202, 'Funk', 'Broderick', 'novice', 'lead'), (203, 'Schumm', 'Mckenzie', 'novice', 'lead'), (204, 'Baumbach', 'Larry', 'novice', 'lead'), (205, 'Olson', 'Ole', 'novice', 'lead'), (206, 'Gusikowski', 'Kailee', 'novice', 'lead'), (207, 'Brakus', 'Orie', 'novice', 'lead'), (208, 'Wilderman', 'Hunter', 'novice', 'lead'), (209, 'Jewess', 'Mia', 'novice', 'lead'), (210, 'Erdman', 'Katlyn', 'novice', 'lead'), (211, 'Kuhlman', 'Rhianna', 'novice', 'lead'), (212, 'Kertzmann', 'Chanelle', 'novice', 'lead'), (213, 'Hickle', 'Stella', 'novice', 'lead'), (214, 'Christiansen', 'Moises', 'novice', 'lead'), (215, 'Cummings', 'Vito', 'novice', 'lead'), (216, 'Turner', 'Imelda', 'novice', 'lead'), (217, 'Strosin', 'Antonio', 'novice', 'lead'), (218, 'Balistreri', 'Arvid', 'novice', 'lead'), (219, 'Cummings', 'Korbin', 'novice', 'lead'), (220, 'Herman', 'Will', 'novice', 'lead'), (221, 'Powlowski', 'Florencio', 'novice', 'lead'), (222, 'Legros', 'Audie', 'novice', 'lead'), (223, 'Larkin', 'Mekhi', 'novice', 'lead'), (224, 'Gorczany', 'Luther', 'novice', 'lead'), (225, 'Stoltenberg', 'Orpha', 'novice', 'lead'), (226, 'Lindgren', 'Paolo', 'novice', 'lead'), (227, 'Mann', 'Matt', 'novice', 'lead'), (228, 'Jenkins', 'Hoyt', 'novice', 'lead'), (229, 'Hilll', 'Elena', 'novice', 'lead'), (100, 'DuBuque', 'Furman', 'novice', 'follow'), (101, 'Schumm', 'Serena', 'novice', 'follow'), (102, 'OConnell', 'Layla', 'novice', 'follow'), (103, 'Lesch', 'Tania', 'novice', 'follow'), (104, 'Moore', 'Sigmund', 'novice', 'follow'), (105, 'Hilll', 'Destini', 'novice', 'follow'), (106, 'Smith', 'Chelsie', 'novice', 'follow'), (107, 'Hills', 'Ethel', 'novice', 'follow'), (108, 'Mohr', 'Gustave', 'novice', 'follow'), (109, 'Gleichner', 'Tiara', 'novice', 'follow'), (110, 'Schultz', 'Rickie', 'novice', 'follow'), (111, 'Thompson', 'Annetta', 'novice', 'follow'), (112, 'Macejkovic', 'Valentina', 'novice', 'follow'), (113, 'Kirlin', 'Antonette', 'novice', 'follow'), (114, 'McKenzie', 'Moises', 'novice', 'follow'), (115, 'Nader', 'Maximilian', 'novice', 'follow'), (116, 'Stiedemann', 'Roberto', 'novice', 'follow'), (117, 'Kunde', 'Nova', 'novice', 'follow'), (118, 'Mertz', 'Allie', 'novice', 'follow'), (119, 'Davis', 'Bradly', 'novice', 'follow'), (120, 'Sipes', 'Yoshiko', 'novice', 'follow'), (121, 'Prohaska', 'Ramon', 'novice', 'follow'), (122, 'McKenzie', 'Michel', 'novice', 'follow'), (123, 'Leuschke', 'Beth', 'novice', 'follow'), (124, 'Pagac', 'Levi', 'novice', 'follow'), (125, 'Veum', 'Anabel', 'novice', 'follow'), (126, 'McCullough', 'Mariano', 'novice', 'follow'), (127, 'Russel', 'Delores', 'novice', 'follow'), (128, 'Wiegand', 'Geoffrey', 'novice', 'follow'), (129, 'Auer', 'Gardner', 'novice', 'follow'), (130, 'Wilkinson', 'Quinn', 'novice', 'follow'), (131, 'Lakin', 'Jalon', 'novice', 'follow'), (132, 'Kunde', 'Jovani', 'novice', 'follow'), (133, 'Lubowitz', 'Brenda', 'novice', 'follow'), (134, 'Lynch', 'Stacy', 'novice', 'follow'), (135, 'Zboncak', 'Roy', 'novice', 'follow'), (136, 'Bode', 'Jacinto', 'novice', 'follow'), (137, 'Lakin', 'Adam', 'novice', 'follow'), (138, 'Reilly', 'Larissa', 'novice', 'follow'), (139, 'Towne', 'Jaqueline', 'novice', 'follow'), (140, 'McGlynn', 'Humberto', 'novice', 'follow'), (141, 'Fay', 'Walker', 'novice', 'follow'), (142, 'Sipes', 'Beatrice', 'novice', 'follow'), (143, 'Hansen', 'Melody', 'novice', 'follow'), (144, 'Konopelski', 'Lauren', 'novice', 'follow'), (145, 'Block', 'Sammy', 'novice', 'follow'), (146, 'Feest', 'Timmothy', 'novice', 'follow'), (147, 'Johnson', 'Allene', 'novice', 'follow'), (148, 'Schinner', 'Sandra', 'novice', 'follow'), (149, 'Streich', 'Kristina', 'novice', 'follow'), (150, 'Mayer', 'Oliver', 'novice', 'follow'), (151, 'Heidenreich', 'Bernard', 'novice', 'follow'), (152, 'Mann', 'Letitia', 'novice', 'follow'), (153, 'Heidenreich', 'Aileen', 'novice', 'follow'), (154, 'Morissette', 'Lizzie', 'novice', 'follow'), (155, 'Daugherty', 'Earnest', 'novice', 'follow'), (156, 'Gleichner', 'Bobby', 'novice', 'follow'), (157, 'Powlowski', 'Alexa', 'novice', 'follow'), (158, 'Osinski', 'Marvin', 'novice', 'follow'), (159, 'Parker', 'Marco', 'novice', 'follow'), (160, 'OKon', 'Doug', 'novice', 'follow'), (161, 'Batz', 'Brook', 'novice', 'follow'), (162, 'Barton', 'Sallie', 'novice', 'follow'), (163, 'Ankunding', 'Libbie', 'novice', 'follow'), (164, 'Heaney', 'Carolyn', 'novice', 'follow'), (165, 'Hudson', 'Bartholome', 'novice', 'follow'), (166, 'Pouros', 'Lizeth', 'novice', 'follow'), (167, 'Jaskolski', 'Jessy', 'novice', 'follow'), (168, 'Dare', 'Leda', 'novice', 'follow'), (169, 'Swift', 'Catharine', 'novice', 'follow'), (170, 'Weissnat', 'Meagan', 'novice', 'follow'), (171, 'Dickens', 'Kamryn', 'novice', 'follow'), (172, 'Fay', 'Dakota', 'novice', 'follow'), (173, 'Mayert', 'Hayley', 'novice', 'follow'), (174, 'Murray', 'Tristian', 'novice', 'follow'), (175, 'Ratke', 'Shirley', 'novice', 'follow'), (176, 'Goodwin', 'Lauretta', 'novice', 'follow'), (177, 'Walker', 'Bert', 'novice', 'follow'), (178, 'Murray', 'Mabelle', 'novice', 'follow'), (179, 'Weimann', 'Ottilie', 'novice', 'follow')

USE contest;
INSERT INTO participants (bib_number, lastname, firstname, division, role) VALUES (100, 'Feest', 'Alexander', 'novice', 'follow'), (101, 'Lind', 'Elias', 'novice', 'follow'), (102, 'Predovic', 'Raven', 'novice', 'follow'), (103, 'Roberts', 'Luther', 'novice', 'follow'), (104, 'Monahan', 'Paul', 'novice', 'follow'), (105, 'Wolff', 'Lucas', 'novice', 'follow'), (106, 'Dibbert', 'Berneice', 'novice', 'follow'), (107, 'Hermann', 'Shanel', 'novice', 'follow'), (108, 'Schimmel', 'Hipolito', 'novice', 'follow'), (109, 'Crist', 'Gail', 'novice', 'follow'), (110, 'Heathcote', 'Amara', 'novice', 'follow'), (111, 'Jacobi', 'Glenda', 'novice', 'follow'), (112, 'Cummerata', 'Enola', 'novice', 'follow'), (113, 'Weissnat', 'Korbin', 'novice', 'follow'), (114, 'Hyatt', 'Jonatan', 'novice', 'follow'), (115, 'Robel', 'Colleen', 'novice', 'follow'), (116, 'Marks', 'Cristina', 'novice', 'follow'), (117, 'Brakus', 'Ewell', 'novice', 'follow'), (118, 'Stanton', 'Hannah', 'novice', 'follow'), (119, 'Blick', 'Laurence', 'novice', 'follow'), (120, 'Kunde', 'Tremayne', 'novice', 'follow'), (121, 'Kohler', 'Michale', 'novice', 'follow'), (122, 'Greenfelder', 'Aditya', 'novice', 'follow'), (123, 'Wilderman', 'Alysson', 'novice', 'follow'), (124, 'Kassulke', 'Mike', 'novice', 'follow'), (125, 'Reynolds', 'Tatyana', 'novice', 'follow'), (126, 'Smitham', 'Kyleigh', 'novice', 'follow'), (127, 'Donnelly', 'Misael', 'novice', 'follow'), (128, 'Jenkins', 'Ally', 'novice', 'follow'), (129, 'Swift', 'Manley', 'novice', 'follow'), (130, 'Boyle', 'Sterling', 'novice', 'follow'), (131, 'Dare', 'Sabrina', 'novice', 'follow'), (132, 'Hudson', 'Darrell', 'novice', 'follow'), (133, 'Rogahn', 'Stefan', 'novice', 'follow'), (134, 'Wisozk', 'Thalia', 'novice', 'follow'), (135, 'Haley', 'Cesar', 'novice', 'follow'), (136, 'Stracke', 'Germaine', 'novice', 'follow'), (137, 'McClure', 'Domenick', 'novice', 'follow'), (138, 'Nicolas', 'Shania', 'novice', 'follow'), (139, 'Hoeger', 'Myriam', 'novice', 'follow'), (140, 'Heller', 'Leonel', 'novice', 'follow'), (141, 'Klein', 'Wilber', 'novice', 'follow'), (142, 'Stanton', 'Justice', 'novice', 'follow'), (143, 'Casper', 'Sanford', 'novice', 'follow'), (144, 'Schiller', 'Kavon', 'novice', 'follow'), (145, 'Zemlak', 'Kayli', 'novice', 'follow'), (146, 'Lakin', 'Tavares', 'novice', 'follow'), (147, 'Emard', 'Jovan', 'novice', 'follow'), (148, 'Lehner', 'Dorothea', 'novice', 'follow'), (149, 'Keebler', 'Marlin', 'novice', 'follow'), (150, 'Koelpin', 'Darian', 'novice', 'follow'), (151, 'Brakus', 'Kathleen', 'novice', 'follow'), (152, 'Streich', 'Ernestina', 'novice', 'follow'), (153, 'Gottlieb', 'Stella', 'novice', 'follow'), (154, 'Anderson', 'Gregoria', 'novice', 'follow'), (155, 'Reilly', 'Virginie', 'novice', 'follow'), (156, 'Grady', 'Aubrey', 'novice', 'follow'), (157, 'Klein', 'Adaline', 'novice', 'follow'), (158, 'OHara', 'Tomasa', 'novice', 'follow'), (159, 'Beatty', 'Barry', 'novice', 'follow'), (160, 'Kshlerin', 'Aurelio', 'novice', 'follow'), (161, 'Cole', 'Margaret', 'novice', 'follow'), (162, 'Connelly', 'Eriberto', 'novice', 'follow'), (163, 'Trantow', 'Breanne', 'novice', 'follow'), (164, 'Bailey', 'Jerad', 'novice', 'follow'), (165, 'Ankunding', 'Seamus', 'novice', 'follow'), (166, 'Bayer', 'Craig', 'novice', 'follow'), (167, 'Macejkovic', 'Alice', 'novice', 'follow'), (168, 'Robel', 'Jalyn', 'novice', 'follow'), (169, 'OConnell', 'Cloyd', 'novice', 'follow'), (170, 'Morar', 'Lloyd', 'novice', 'follow'), (171, 'Lowe', 'Mireille', 'novice', 'follow'), (172, 'Barton', 'Katelin', 'novice', 'follow'), (173, 'Prosacco', 'Dameon', 'novice', 'follow'), (174, 'Yost', 'Assunta', 'novice', 'follow'), (175, 'Lynch', 'Isadore', 'novice', 'follow'), (176, 'Rath', 'Margaretta', 'novice', 'follow'), (177, 'Harris', 'Lou', 'novice', 'follow'), (178, 'Kozey', 'Gia', 'novice', 'follow'), (179, 'Kohler', 'Oceane', 'novice', 'follow')

USE contest;
SELECT scores.bib_number, participants.lastname, participants.firstname, scores.division, scores.round, scores.judge, scores.score
FROM participants INNER JOIN scores ON scores.bib_number = participants.bib_number and scores.division = 'novice';

USE contest;
SELECT * from participants;
DELETE from participants;

USE contest;
SELECT * from participants;


USE contest;
DELETE FROM scores;
