const request = require('./request');

describe('request functions', () => {
    it('makes a request to the books to scrape page and returns HTML', async() => {
      const document = await request();
      expect(document.querySelector('h1').textContent)
        .toEqual('All products');
    });
});