function fetch(url) {
  return new Promise((accept, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      console.log(accept(JSON.parse(xhr.response)));
    };
    xhr.send();
  });
}

fetch('http://api.github.com/users/Ayushak18');
