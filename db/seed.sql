
\c songs_dev;

INSERT INTO songs (id, name, artist, album, time, is_favorite)
VALUES
  ('1','Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '5:55', true),
  ('2','Stairway to Heaven', 'Led Zeppelin', 'Untitled IV', '8:03', false),
  ('3','Hotel California', 'Eagles', 'Hotel California', '6:30', true),
  ('4','Paint It Black', 'The Rolling Stones', 'Aftermath', '3:22', false),
  ('5','Comfortably Numb', 'Pink Floyd', 'The Wall', '6:23', true),
  ('6','Sweet Child O'' Mine', 'Guns N'' Roses', 'Appetite for Destruction', '5:55', false),
  ('7','Light My Fire', 'The Doors', 'The Doors', '7:08', true),
  ('8','Purple Haze', 'Jimi Hendrix', 'Are You Experienced', '2:50', false),
  ('9','Smoke on the Water', 'Deep Purple', 'Machine Head', '5:40', true),
  ('10','Black Dog', 'Led Zeppelin', 'Led Zeppelin IV', '4:55', false);

INSERT INTO artists (id, name, genre)
VALUES
  ('1','Queen', 'Rock'),
  ('2','Led Zeppelin', 'Rock'),
  ('3','Eagles', 'Rock'),
  ('4','The Rolling Stones', 'Rock'),
  ('5','Pink Floyd', 'Rock'),
  ('6','Guns N'' Roses', 'Rock'),
  ('7','The Doors', 'Rock'),
  ('8','Jimi Hendrix', 'Rock'),
  ('9','Deep Purple', 'Rock');
  