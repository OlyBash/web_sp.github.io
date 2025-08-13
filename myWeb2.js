for (let i = 0; i < 8; ++i) {
  const pic = document.querySelector(`.wrapper .characters ul li:nth-child(${i + 1})`);
  setTimeout(function () {
    pic.style.opacity = 1;
  }, 3500 + 500 * (i))
  //等加载动画结束再逐张显示
}

//CD播放音乐(放碟)
let CD = document.querySelector('.wrapper .left .music audio');
let img = document.querySelector('.wrapper .left .CD img');
//公共函数
function streaming() {
  if (img.style.animationPlayState === 'running') {
    CD.pause();
    img.style.animationPlayState = 'paused';
  }
  else {
    img.style.animationPlayState = 'running';
    CD.play();
  }
}

let play = document.querySelector('.wrapper .left .music button');
play.addEventListener('click', () => {
  streaming();
});

//设置切换歌曲与CD封面
const cover = ['./mywebImage/music1.png',
  './mywebImage/music2.png',
  './mywebImage/music3.png',
  './mywebImage/music4.png',
  './mywebImage/music5.png',
  './mywebImage/music6.png',
  './mywebImage/music7.png',
  './mywebImage/music8.png'
]

const audios = ['./mywebAudios/umi.mp3',
  './mywebAudios/nomura.mp3',
  './mywebAudios/ao.mp3',
  './mywebAudios/shiroha.mp3',
  './mywebAudios/shiki.mp3',
  './mywebAudios/kamome.mp3',
  './mywebAudios/wenders.mp3',
  './mywebAudios/shizuku.mp3'
]

for (let i = 0; i < 8; ++i) {
  const option = document.querySelector(`.wrapper .right .nav li:nth-child(${i + 1}) a`)
  option.addEventListener('click', function () {
    const myCover = document.querySelector('.wrapper .left .CD');
    myCover.innerHTML = `<img src="${cover[i]}" alt="">`;
    if (img.style.animationPlayState === 'running') {
      img.style.animationPlayState = 'paused';
    }
    img = document.querySelector('.wrapper .left .CD img');
    CD.src = `${audios[i]}`;
    console.log(img);
    streaming();
  });
}

//查看人物设定
const arr = [['./mywebImage/umi1.jpg', './mywebImage/umi2.jpg'],
['./mywebImage/nomura1.jpg', './mywebImage/nomura2.jpg'],
['./mywebImage/ao1.jpg', './mywebImage/ao2.jpg'],
['./mywebImage/siroha1.jpg', './mywebImage/siroha2.jpg'],
['./mywebImage/shiki1.jpg', './mywebImage/shiki2.jpg'],
['./mywebImage/kamome1.jpg', './mywebImage/kamome2.jpg'],
['./mywebImage/wenders1.jpg', './mywebImage/wenders2.jpg'],
['./mywebImage/shizuku1.jpg', './mywebImage/shizuku2.jpg']
]
let li = document.querySelector('.bigBox ul li');
//获取map,后续使它与新添加的li同时向左移动
const map = document.querySelector('.bigBox .map');
for (let i = 0; i < 8; ++i) {
  const button = document.querySelector(`.bigBox .map .icon div:nth-child(${i + 1})`);
  button.addEventListener('click', () => {
    li.innerHTML = `
                    <img src='${arr[i][0]}' alt=''>
                    <img src='${arr[i][1]}' alt=''>
                   `;
    li.style.animationPlayState = 'paused';
    map.style.animationPlayState = 'paused';
    li.style.animationName = 'movement';
    map.style.animationName = 'movement';
    li.style.animationPlayState = 'running';
    map.style.animationPlayState = 'running';
  })
}

li.addEventListener('click', () => {
  li.style.animationPlayState = 'paused';
  map.style.animationPlayState = 'paused';
  li.style.animationName = 'arrival';
  map.style.animationName = 'arrival';
  li.style.animationPlayState = 'running';
  map.style.animationPlayState = 'running';
})

//加载过程的js
for (let i = 0; i < 3; ++i) {
  const dot = document.querySelectorAll('.loadwrp div .dot');
  setTimeout(function () {
    dot[i].style.opacity = 1;
  }, 700 * (i + 1));
}

//关闭加载动画
setTimeout(function () {
  const loading = document.querySelector('.loadwrp');
  loading.style.animationPlayState = 'running';
}, 2500)

//加载动画结束后恢复滚动条
setTimeout(function () {
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
}, 3500)
