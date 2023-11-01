
\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite)
VALUES
  ('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '5:55', true),
  ('Stairway to Heaven', 'Led Zeppelin', 'Untitled IV', '8:03', false),
  ('Hotel California', 'Eagles', 'Hotel California', '6:30', true),
  ('Paint It Black', 'The Rolling Stones', 'Aftermath', '3:22', false),
  ('Comfortably Numb', 'Pink Floyd', 'The Wall', '6:23', true),
  ('Sweet Child O'' Mine', 'Guns N'' Roses', 'Appetite for Destruction', '5:55', false),
  ('Light My Fire', 'The Doors', 'The Doors', '7:08', true),
  ('Purple Haze', 'Jimi Hendrix', 'Are You Experienced', '2:50', false),
  ('Smoke on the Water', 'Deep Purple', 'Machine Head', '5:40', true),
  ('Black Dog', 'Led Zeppelin', 'Led Zeppelin IV', '4:55', false);

  INSERT INTO artists (name, genre)
VALUES
  ('Queen', 'Rock'),
  ('Led Zeppelin', 'Rock'),
  ('Eagles', 'Rock'),
  ('The Rolling Stones', 'Rock'),
  ('Pink Floyd', 'Rock'),
  ('Guns N'' Roses', 'Rock'),
  ('The Doors', 'Rock'),
  ('Jimi Hendrix', 'Rock'),
  ('Deep Purple', 'Rock');