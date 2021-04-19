let rootElement = document.querySelector('.news');
let drop = document.querySelector('.drop-down');

drop.addEventListener('change', (event) => {
  if (event.target.value === 'All') {
  }
});

function createUI(title, url, imgURL, newsSite) {
  let article = document.createElement('div');
  article.classList = 'article';

  let imgDiv = document.createElement('div');
  imgDiv.classList = 'img';

  let img = document.createElement('img');
  img.src = imgURL;

  imgDiv.append(img);

  let text = document.createElement('div');
  text.classList = 'text';

  let p = document.createElement('p');
  p.innerText = newsSite;

  let heading = document.createElement('h2');
  heading.innerText = title;

  let readMore = document.createElement('a');
  readMore.href = url;
  readMore.innerText = 'Read More';
  readMore.target = '_blank';

  text.append(p, heading, readMore);

  article.append(imgDiv, text);
  rootElement.append(article);
}

fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30')
  .then((res) => res.json())
  .then((space) => {
    space.forEach((article) => {
      createUI(article.title, article.url, article.imageUrl, article.newsSite);
    });
  });
