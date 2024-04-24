CREATE TABLE Billetter
(
    TypeFilm VARCHAR(255) NOT NULL,
    antall VARCHAR(255) NOT NULL,
    fornavn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    telefon VARCHAR(255) NOT NULL,
    epost VARCHAR(255) NOT NULL,
    PRIMARY KEY (fornavn, etternavn)
);