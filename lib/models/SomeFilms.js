const pool = require('../utils/pool');
module.exports = class SomeFilms {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.director = row.director;
    this.genre = row.genre;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from films');

    return rows.map((filmRow) => new SomeFilms(filmRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from films WHERE id = $1', [
      id,
    ]);
    return new SomeFilms(rows[0]);
  }
};
