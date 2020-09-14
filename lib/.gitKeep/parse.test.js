const request = require('./request');
const parse = require('./parse');

describe('parse function', () => {
    it('returns an array of all books title, cover image, rating, price, and a boolean indicating if it is in stock', async() => {
      const document = await request();

      const bookInfo = parse(document);

      expect(bookInfo).toEqual(expect.arrayContaining([
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
        },
        {
          title: 'The Requiem Red',
          cover_image: 'catalogue/the-requiem-red_995/index.html',
          rating: 'One',
          price: '£22.65',
          in_stock: true
        },
        {
          title: 'The Dirty Little Secrets of Getting Your Dream Job',
          cover_image: 'catalogue/the-dirty-little-secrets-of-getting-your-dream-job_994/index.html',
          rating: 'Four',
          price: '£33.34',
          in_stock: true
        },
        {
          title: 'The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull',
          cover_image: 'catalogue/the-coming-woman-a-novel-based-on-the-life-of-the-infamous-feminist-victoria-woodhull_993/index.html',
          rating: 'Three',
          price: '£17.93',
          in_stock: true
        },
        {
          title: 'The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics',
          cover_image: 'catalogue/the-boys-in-the-boat-nine-americans-and-their-epic-quest-for-gold-at-the-1936-berlin-olympics_992/index.html',
          rating: 'Four',
          price: '£22.60',
          in_stock: true
        },
        {
          title: 'The Black Maria',
          cover_image: 'catalogue/the-black-maria_991/index.html',
          rating: 'One',
          price: '£52.15',
          in_stock: true
        },
        {
          title: 'Starving Hearts (Triangular Trade Trilogy, #1)',
          cover_image: 'catalogue/starving-hearts-triangular-trade-trilogy-1_990/index.html',
          rating: 'Two',
          price: '£13.99',
          in_stock: true
        },
        {
          title: "Shakespeare's Sonnets",
          cover_image: 'catalogue/shakespeares-sonnets_989/index.html',
          rating: 'Four',
          price: '£20.66',
          in_stock: true
        },
        {
          title: 'Set Me Free',
          cover_image: 'catalogue/set-me-free_988/index.html',
          rating: 'Five',
          price: '£17.46',
          in_stock: true
        },
        {
          title: "Scott Pilgrim's Precious Little Life (Scott Pilgrim #1)",
          cover_image: 'catalogue/scott-pilgrims-precious-little-life-scott-pilgrim-1_987/index.html',
          rating: 'Five',
          price: '£52.29',
          in_stock: true
        },
        {
          title: 'Rip it Up and Start Again',
          cover_image: 'catalogue/rip-it-up-and-start-again_986/index.html',
          rating: 'Five',
          price: '£35.02',
          in_stock: true
        },
        {
          title: 'Our Band Could Be Your Life: Scenes from the American Indie Underground, 1981-1991',
          cover_image: 'catalogue/our-band-could-be-your-life-scenes-from-the-american-indie-underground-1981-1991_985/index.html',
          rating: 'Three',
          price: '£57.25',
          in_stock: true
        },
        {
          title: 'Olio',
          cover_image: 'catalogue/olio_984/index.html',
          rating: 'One',
          price: '£23.88',
          in_stock: true
        },
        {
          title: 'Mesaerion: The Best Science Fiction Stories 1800-1849',
          cover_image: 'catalogue/mesaerion-the-best-science-fiction-stories-1800-1849_983/index.html',
          rating: 'One',
          price: '£37.59',
          in_stock: true
        },
        {
          title: 'Libertarianism for Beginners',
          cover_image: 'catalogue/libertarianism-for-beginners_982/index.html',
          rating: 'Two',
          price: '£51.33',
          in_stock: true
        },
        {
          title: "It's Only the Himalayas",
          cover_image: 'catalogue/its-only-the-himalayas_981/index.html',
          rating: 'Two',
          price: '£45.17',
          in_stock: true
        }
      ]));
    });
});

