const fs = require('fs');
const request = require('./request');
const pool = require('./utils/pool');
const store = require('./store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an arrary of books and saves them in the database', async() => {
    const books = [
      {
        title: 'A Light in the Attic',
        cover_image: 'catalogue/a-light-in-the-attic_1000/index.html',
        rating: 'Three',
        price: '£51.77',
        in_stock: true
      },
      {
        title: 'Tipping the Velvet',
        cover_image: 'catalogue/tipping-the-velvet_999/index.html',
        rating: 'One',
        price: '£53.74',
        in_stock: true
      },
      {
        title: 'Soumission',
        cover_image: 'catalogue/soumission_998/index.html',
        rating: 'One',
        price: '£50.10',
        in_stock: true
      },
      {
        title: 'Sharp Objects',
        cover_image: 'catalogue/sharp-objects_997/index.html',
        rating: 'Four',
        price: '£47.82',
        in_stock: true
      },
      {
        title: 'Sapiens: A Brief History of Humankind',
        cover_image: 'catalogue/sapiens-a-brief-history-of-humankind_996/index.html',
        rating: 'Five',
        price: '£54.23',
        in_stock: true
      }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(5);
  });
});