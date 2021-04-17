let imageSection = document.querySelector('.images');
let inputBar = document.querySelector('input');
let xhr = new XMLHttpRequest();

xhr.open(
  'GET',
  'https://api.unsplash.com/photos/?client_id=0Fqxl8oZYm7DxTGGq604f56958LfUP_2NkfQLrW4-hE'
);
xhr.onload = () => {
  let imageData = JSON.parse(xhr.response);
  imageData.forEach((img) => {
    let imgTag = document.createElement('img');
    imgTag.src = img.urls.full;
    imageSection.append(imgTag);
  });
};
xhr.send();

inputBar.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && inputBar.value) {
    xhr.open(
      'GET',
      'https://api.unsplash.com/photos/?client_id=0Fqxl8oZYm7DxTGGq604f56958LfUP_2NkfQLrW4-hE/search/collections?page=1&query=office'
    );
    xhr.onload = () => {
      console.log(xhr.response);
    };

    xhr.send();
  }
});

// xhr.open('GET')
