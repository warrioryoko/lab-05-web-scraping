const request = require('./request');
const parse = require('./parse');

describe('parse function', () => {
  it('returns an array of all books title, cover image, rating, price, and a boolean indicating if it is in stock', async() => {
    const document = await request();

    const bookInfo = parse(document);

    expect(bookInfo).toEqual(expect.arrayContaining([
      {
        title: 'A Light in the Attic',
        cover_image: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg',
        rating: 'Three',
        price: '£51.77',
        in_stock: true
      },
      {
        title: 'Tipping the Velvet',
        cover_image: 'media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg',
        rating: 'One',
        price: '£53.74',
        in_stock: true
      },
      {
        title: 'Soumission',
        cover_image: 'media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg',
        rating: 'One',
        price: '£50.10',
        in_stock: true
      },
      {
        title: 'Sharp Objects',
        cover_image: 'media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg',
        rating: 'Four',
        price: '£47.82',
        in_stock: true
      },
      {
        title: 'Sapiens: A Brief History of Humankind',
        cover_image: 'media/cache/be/a5/bea5697f2534a2f86a3ef27b5a8c12a6.jpg',
        rating: 'Five',
        price: '£54.23',
        in_stock: true
      },
      {
        title: 'The Requiem Red',
        cover_image: 'media/cache/68/33/68339b4c9bc034267e1da611ab3b34f8.jpg',
        rating: 'One',
        price: '£22.65',
        in_stock: true
      },
      {
        title: 'The Dirty Little Secrets of Getting Your Dream Job',
        cover_image: 'media/cache/92/27/92274a95b7c251fea59a2b8a78275ab4.jpg',
        rating: 'Four',
        price: '£33.34',
        in_stock: true
      },
      {
        title: 'The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull',
        cover_image: 'media/cache/3d/54/3d54940e57e662c4dd1f3ff00c78cc64.jpg',
        rating: 'Three',
        price: '£17.93',
        in_stock: true
      },
      {
        title: 'The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics',
        cover_image: 'media/cache/66/88/66883b91f6804b2323c8369331cb7dd1.jpg',
        rating: 'Four',
        price: '£22.60',
        in_stock: true
      },
      {
        title: 'The Black Maria',
        cover_image: 'media/cache/58/46/5846057e28022268153beff6d352b06c.jpg',
        rating: 'One',
        price: '£52.15',
        in_stock: true
      },
      {
        title: 'Starving Hearts (Triangular Trade Trilogy, #1)',
        cover_image: 'media/cache/be/f4/bef44da28c98f905a3ebec0b87be8530.jpg',
        rating: 'Two',
        price: '£13.99',
        in_stock: true
      },
      {
        title: 'Shakespeare\'s Sonnets',
        cover_image: 'media/cache/10/48/1048f63d3b5061cd2f424d20b3f9b666.jpg',
        rating: 'Four',
        price: '£20.66',
        in_stock: true
      },
      {
        title: 'Set Me Free',
        cover_image: 'media/cache/5b/88/5b88c52633f53cacf162c15f4f823153.jpg',
        rating: 'Five',
        price: '£17.46',
        in_stock: true
      },
      {
        title: 'Scott Pilgrim\'s Precious Little Life (Scott Pilgrim #1)',
        cover_image: 'media/cache/94/b1/94b1b8b244bce9677c2f29ccc890d4d2.jpg',
        rating: 'Five',
        price: '£52.29',
        in_stock: true
      },
      {
        title: 'Rip it Up and Start Again',
        cover_image: 'media/cache/81/c4/81c4a973364e17d01f217e1188253d5e.jpg',
        rating: 'Five',
        price: '£35.02',
        in_stock: true
      },
      {
        title: 'Our Band Could Be Your Life: Scenes from the American Indie Underground, 1981-1991',
        cover_image: 'media/cache/54/60/54607fe8945897cdcced0044103b10b6.jpg',
        rating: 'Three',
        price: '£57.25',
        in_stock: true
      },
      {
        title: 'Olio',
        cover_image: 'media/cache/55/33/553310a7162dfbc2c6d19a84da0df9e1.jpg',
        rating: 'One',
        price: '£23.88',
        in_stock: true
      },
      {
        title: 'Mesaerion: The Best Science Fiction Stories 1800-1849',
        cover_image: 'media/cache/09/a3/09a3aef48557576e1a85ba7efea8ecb7.jpg',
        rating: 'One',
        price: '£37.59',
        in_stock: true
      },
      {
        title: 'Libertarianism for Beginners',
        cover_image: 'media/cache/0b/bc/0bbcd0a6f4bcd81ccb1049a52736406e.jpg',
        rating: 'Two',
        price: '£51.33',
        in_stock: true
      },
      {
        title: 'It\'s Only the Himalayas',
        cover_image: 'media/cache/27/a5/27a53d0bb95bdd88288eaf66c9230d7e.jpg',
        rating: 'Two',
        price: '£45.17',
        in_stock: true
      }
    ]));
  });
});

