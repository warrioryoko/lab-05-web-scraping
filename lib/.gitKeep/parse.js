const parse = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  const bookDetails = bookElements.map(book => ({
    title: book.querySelector('h3 > a').getAttribute('title'),
    cover_image: book.querySelector('.image_container > a').getAttribute('href'),
    rating: book.querySelector('p').getAttribute('class').split(' ').slice(-1)[0],
    price: book.querySelector('.product_price > p').textContent,
    in_stock: book.querySelector('.instock').textContent.includes('In stock') ? true : false
  }));

  console.log(bookDetails);
  return bookDetails;
}

module.exports = parse;