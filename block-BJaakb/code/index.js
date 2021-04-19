function fetch(url) {
  let xhr = new XMLHttpRequest();
  return new Promise((accept, reject) => {
    xhr.open('GET', url);
    xhr.onload = () => accept(JSON.parse(xhr.response));
    xhr.onerror = () => reject('Something is wrong');
    xhr.send();
  });
}

fetch('http://api.github.com/users/Ayushak18')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Promise Done');
  });

// xhr.onload = () => {
//   accept(JSON.parse(xhr.response)).then((data) => {
//     console.log(data);
//   });
// };
