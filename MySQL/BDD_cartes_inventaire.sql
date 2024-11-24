-- Création de la base de données
CREATE DATABASE pokemon;
USE pokemon;

-- Création de la table pour stocker les informations des Pokémon
CREATE TABLE pokemon (
    id INTEGER NOT NULL PRIMARY KEY,
    nom VARCHAR(100),
    images VARCHAR(100) UNIQUE,
    nb_exemplaire INTEGER
);