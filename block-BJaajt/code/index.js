let user = document.querySelector('.user-input');
let userName = document.querySelector('.username');
let userImg = document.querySelector('.profile');
let dogImg = document.querySelector('.dogPic');
let dogBtn = document.querySelector('.btn');

let xhr = new XMLHttpRequest();

user.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    dataFun(event);
    setTimeout(follower, 1000);
    setTimeout(following, 2000);
  }
});

function dataFun() {
  xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
  xhr.onload = () => {
    let data = JSON.parse(xhr.response);
    userName.innerText = data.name;
    userImg.src = data.avatar_url;
  };
  xhr.send();
}

function follower() {
  let followerParameter = user.value;
  xhr.open(
    'GET',
    `https://api.github.com/users/${followerParameter}/followers`
  );
  xhr.onload = () => {
    let followerArr = JSON.parse(xhr.response);
    let numberOfFollowers;
    if (followerArr.length >= 5) {
      numberOfFollowers = 5;
    } else {
      numberOfFollowers = followerArr.length;
    }
    for (let i = 0; i < numberOfFollowers; i++) {
      let followerImg = document.querySelector(`.follow-${i}`);
      followerImg.src = followerArr[i].avatar_url;
    }
  };
  xhr.send();
}

function following() {
  let followingParameter = user.value;
  xhr.open(
    'GET',
    `https://api.github.com/users/${followingParameter}/following`
  );
  xhr.onload = () => {
    let followingArr = JSON.parse(xhr.response);
    let numberOffollowings;
    if (followingArr.length >= 5) {
      numberOffollowings = 5;
    } else {
      numberOffollowings = followingArr.length;
    }
    for (let i = 0; i < numberOffollowings; i++) {
      let followingImg = document.querySelector(`.following-${i}`);
      followingImg.src = followingArr[i].avatar_url;
    }
  };
  xhr.send();
  user.value = '';
}

dogBtn.addEventListener('click', () => {
  xhr.open(
    'GET',
    'https://api.unsplash.com/photos/random/?client_id=wnS-6jmJKxDZxXllHtQQyrzi1HPa-faft9D_MBBftIQ'
  );
  xhr.onload = () => {
    let dogData = JSON.parse(xhr.response);
    dogImg.src = dogData.urls.full;
    console.log(dogData);
    // for (let i of dogData) {
    //   dogImg.src = i.urls.full;
    //   console.log(i.urls.full);
    // }
    // console.log(dogImg);
  };
  xhr.send();
});
