let donut = document.querySelector('.spinner');
let root = document.querySelector('.books');
let header = document.querySelector('header');

function waiter(value = false) {
  donut.style.display = 'none';
  header.style.display = 'block';

  if (value) {
    donut.style.display = 'flex';
    header.style.display = 'none';
    donut.innerHTML = '<div class="donut"></div>';
  } else {
    donut.innerHTML = '';
  }
}

function dataFetch() {
  waiter(true);
  fetch('https://www.anapioficeandfire.com/api/books')
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      createUI(data);
      waiter(false);
    })

    .catch((error) => {
      console.log(error);
      waiter(false);
    });
}

function createUI(data) {
  data.forEach((element) => {
    let book = document.createElement('div');
    book.classList = 'book';
    let bookName = document.createElement('h2');
    bookName.innerText = element.name;
    let author = document.createElement('h3');
    author.innerText = element.authors[0];
    let characters = document.createElement('a');
    characters.innerText = 'Show Characters';
    let charSpan = document.createElement('span');
    charSpan.innerText = ` (${element.characters.length}) `;
    characters.append(charSpan);
    book.append(bookName, author, characters);
    root.append(book);
  });
}

dataFetch();
