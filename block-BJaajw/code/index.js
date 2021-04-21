let rootElement = document.querySelector('.news');
let drop = document.querySelector('.drop-down');
let allNews = [];

// function handleSpinner(status) {
//   if (status) {
//     // let donut = document.createElement('div');
//     // donut.classList = 'donut';
//     // rootElement.append(donut);
//     rootElement.innerHTML = '<div class="donut"></div>';
//   }
// }

drop.addEventListener('change', (event) => {
  rootElement.innerHTML = '';
  allNews.filter((data) => {
    data.filter((agency) => {
      if (agency.newsSite === event.target.value) {
        createUI(agency.title, agency.url, agency.imageUrl, agency.newsSite);
      } else if (event.target.value === 'All') {
        createUI(agency.title, agency.url, agency.imageUrl, agency.newsSite);
      }
    });
  });
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

function init() {
  fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30')
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
    })
    .then((space) => {
      // handleSpinner(false);
      allNews.push(space);
      space.forEach((article) => {
        // handleSpinner(false);
        createUI(
          article.title,
          article.url,
          article.imageUrl,
          article.newsSite
        );
      });
    })
    .catch(() => {
      rootElement.innerText = 'Error happened';
    });
}
// handleSpinner(true);
init();
// handleSpinner(false);
