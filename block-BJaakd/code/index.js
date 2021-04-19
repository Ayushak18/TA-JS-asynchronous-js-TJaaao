let pro = new Promise((resolve, reject) => {
  resolve('First Promise Resolved');
}).then((msg) => {
  setTimeout(() => {
    console.log(msg);
  }, 1000);
});

let anotherPro = new Promise((resolve, reject) => {
  reject('Second Promise rejected');
}).catch((msg) => {
  console.log(msg);
});

let thirdPro = new Promise((res, rej) => {
  rej('Third Promise Rejected !');
})
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => console.log('Third Promise Settled!'));

function wait(time) {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  }).then(() => {
    console.log(`Promise Resolved after ${time / 1000} seconds`);
  });
}

wait(2000);

let sixPro = new Promise((res, rej) => {
  res(21);
})
  .then((data) => {
    return data + 10;
  })
  .then((data) => {
    return data + 100;
  })
  .then((data) => {
    if (data > 100) {
      rej('This is greater than 100');
    }
  })
  .catch((data) => {
    console.error(data);
  });

let sevenPro = new Promise((res, rej) => {
  res(['A']);
})
  .then((data) => {
    data.push('B');
    return data;
  })
  .then((data) => {
    let obj = {};
    obj[1] = data[0];
    obj[2] = data[1];
    return obj;
  })
  .then((data) => {
    console.log(data);
  });

let first = new Promise((res, rej) => {
  res(1);
})
  .then((data) => {
    console.log(data);
    return 2;
  })
  .then((data) => {
    console.log(data);
    return 3;
  })
  .then((data) => {
    console.log(data);
    return 4;
  });

let secondFirst = new Promise((res, rej) => {
  res(1);
}).then((data) => {
  console.log(data);
  return 2;
});

secondFirst.then((data) => {
  console.log(data);
  return 3;
});

secondFirst.then((data) => {
  console.log(data);
  return 4;
});

// let ayush = new Promise((res, rej) => {
//   res('John');
// }).then();
