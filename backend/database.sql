-- Active: 1685004488555@@127.0.0.1@3306@rick_and_morty_db
DROP TABLE IF EXISTS rickcharacter;


CREATE TABLE rickcharacter (
    id INT AUTO_INCREMENT NOT NULL,
    nom VARCHAR(50) NOT NULL,
    species VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO rickcharacter (nom, species) 
VALUE ("Rick Sanchez", "Human"),
        ("Morty Smith", "Human"),
        ("Summer Smith", "Human"),
        ("Beth Smith", "Human"), 
        ("Abadango Cluster Princess", "Alien"),
        ("Arthricia", "Alien");