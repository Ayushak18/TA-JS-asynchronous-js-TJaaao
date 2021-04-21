// First Problem

let one = new Promise((res) => {
  setTimeout(() => {
    res(Math.random() * 15);
  }, 1000);
}).then((data) => {
  return data;
});

let two = new Promise((res) => {
  setTimeout(() => {
    res(Math.random() * 15);
  }, 2000);
});

let three = new Promise((res) => {
  setTimeout(() => {
    res(Math.random() * 15);
  }, 3000);
});

let four = new Promise((res) => {
  setTimeout(() => {
    res(Math.random() * 15);
  }, 4000);
});

let all = Promise.all([one, two, three, four]);

// Second Problem
let users = ['Ayushak18', 'nnnkit', 'prank7', 'dasjideepak', 'ravindra-me'];

let userNamePro = Promise.all(
  users.map((user) => {
    return fetch(`https://api.github.com/users/${user}`).then((res) =>
      res.json()
    );
  })
).then((user) =>
  user.map((followers) =>
    console.log(`${followers.name} has ${followers.followers} followers`)
  )
);

// Third Problem

let promiseOne = fetch('https://random.dog/woof.json').then((res) =>
  res.json()
);

let promiseTwo = fetch('https://aws.random.cat/meow').then((res) => res.json());

Promise.race([promiseOne, promiseTwo]).then((data) => console.log(data));

// Forth Problem

const oneOne = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const twoTwo = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const threeThree = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

let allSettle = Promise.allSettled([oneOne, twoTwo, threeThree]);
