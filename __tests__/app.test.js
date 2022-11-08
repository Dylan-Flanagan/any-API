const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { albums } = require('../lib/albums-data.js');
const { films } = require('../lib/films-data.js');

describe('albums routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/albums should return a list of albums', async () => {
    const res = await request(app).get('/albums');
    const expected = albums.map((album) => {
      return { id: album.id, name: album.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/albums/:id should return album detail', async () => {
    const res = await request(app).get('/albums/1');
    const strangersFromTheUniverse = {
      id: '1',
      name: 'Strangers from the Universe',
      artist: 'Thinking Fellers Union Local 282',
      genre: 'Art Rock',
      year: 1994,
    };
    expect(res.body).toEqual(strangersFromTheUniverse);
  });

  describe('films routes', () => {
    beforeEach(() => {
      return setup(pool);
    });

    it('/films should return a list of films', async () => {
      const res = await request(app).get('/films');
      const expected = films.map((film) => {
        return { id: film.id, name: film.name };
      });
      expect(res.body).toEqual(expected);
    });
    it('/albums/:id should return album detail', async () => {
      const res = await request(app).get('/albums/1');
      const thereWillBeBlood = {
        id: '1',
        name: 'There Will Be Blood',
        director: 'Paul Thomas Anderson',
        genre: 'Period Drama',
        year: 2007,
      };
      expect(res.body).toEqual(thereWillBeBlood);
    });

    afterAll(() => {
      pool.end();
    });
  });
});
