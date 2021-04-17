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
  let inputBarValue = event.target.value;
  if (event.key === 'Enter' && inputBar.value) {
    xhr.open(
      'GET',
      `https://api.unsplash.com/search/photos?query=${inputBarValue}&client_id=0Fqxl8oZYm7DxTGGq604f56958LfUP_2NkfQLrW4-hE`
    );
    xhr.onload = () => {
      imageSection.innerHTML = '';
      let imgData = JSON.parse(xhr.response);
      //   console.log(imgData.results[0].urls.full);
      imgData.results.forEach((image) => {
        let imgTag = document.createElement('img');
        imgTag.src = image.urls.full;
        imageSection.append(imgTag);
      });
    };

    xhr.send();
    event.target.value = '';
  }
});
