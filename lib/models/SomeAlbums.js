const pool = require('../utils/pool');
module.exports = class SomeAlbums {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.artist = row.artist;
    this.genre = row.genre;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from albums');

    return rows.map((albumRow) => new SomeAlbums(albumRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from albums WHERE id = $1', [
      id,
    ]);
    return new SomeAlbums(rows[0]);
  }
};
