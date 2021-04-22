let listSection = document.querySelector('.list-section');
let input = document.querySelector('input');
let baseURL = 'https://sleepy-falls-37563.herokuapp.com/api/todo';

fetch(baseURL)
  .then((data) => data.json())
  .then((data) => createUI(data.todos));

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && event.target.value) {
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };

    event.target.value = '';

    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => createUI(data.todos));
  }
});

listSection.addEventListener('click', (event) => {
  if (event.target.className === 'fas fa-check') {
    event.target.parentElement.nextSibling.style.textDecoration =
      'line-through';
  } else if (event.target.className === 'fas fa-times') {
    fetch(
      `${baseURL}/${event.target.parentNode.parentElement.dataset.number}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      fetch(baseURL)
        .then((data) => data.json())
        .then((data) => createUI(data.todos));
    });
  }
});

function createUI(data) {
  listSection.innerHTML = '';
  data.forEach((element) => {
    console.log(element.title);

    let div = document.createElement('div');
    div.classList = 'component';
    div.setAttribute('data-number', element._id);

    let para = document.createElement('p');
    para.innerText = element.title;

    let anchorOne = document.createElement('a');
    let anchorTwo = document.createElement('a');

    let iconTick = document.createElement('i');
    iconTick.classList = 'fas fa-check';

    let iconCross = document.createElement('i');
    iconCross.classList = 'fas fa-times';

    anchorOne.append(iconTick);
    anchorTwo.append(iconCross);

    div.append(anchorOne, para, anchorTwo);
    listSection.append(div);
  });
}
