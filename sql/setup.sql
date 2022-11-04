-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
  id BIGINT GENERATED ALWAYS AS IDENTITY
  name VARCHAR NOT NULL,
  artist INT NOT NULL, 
  genre INT NOT NULL,
  year INT NOT NULL,
);

INSERT INTO albums (name, artist, genre, year) VALUES 
('Strangers from the Universe', 'Thinking Fellers Union Local 282', 'Art Rock', '1994'),
('The Acrobats', 'Helvetia', 'Rock', '2007'),
('Start a People', 'Black Moth Super Rainbow', 'Psychedelic/Electronic', '2004'),
('Merriweather Post Pavilion', 'Animal Collective', 'Experimental Pop', '2009'),
('Spiderland', 'Slint', 'Rock', '1991'),
('Isnt Anything', 'My Bloody Valentine', 'Shoegaze', '1988'),
('Building Nothing Out of Something', 'Modest Mouse', 'Rock', '2000'),
('Richard D. James Album', 'Aphex Twin', 'Electronic', '1996',),
