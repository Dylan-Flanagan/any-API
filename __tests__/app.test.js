const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { albums } = require('../lib/albums-data.js');

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

  // it('/albums/:id should return album detail', async () => {
  //   const res = await request(app).get('/albums/1');
  //   const strangersFromTheUniverse = {
  //     id: '1',
  //     name: 'Strangers from the Universe',
  //     artist: 'Thinking Fellers Union Local 282',
  //     genre: 'Art Rock',
  //     year: '1994',
  //   };
  //   expect(res.body).toEqual(strangersFromTheUniverse);
  // });

  //   afterAll(() => {
  //     pool.end();
  //   });
});
