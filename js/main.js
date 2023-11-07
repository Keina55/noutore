'use strict';

import EasyMode from './EasyMode.js';
import NormalMode from './NormalMode.js';
import HardMode from './HardMode.js';

const hand = ['<img src="./img/janken_gu.png">', '<img src="./img/janken_choki.png">', '<img src="./img/janken_pa.png">'];
const enemyHand = ['<img src="./img/janken_gu.png">', '<img src="./img/janken_choki.png">', '<img src="./img/janken_pa.png">'];
const order = ['勝って！', '負けて！', '引き分けて！'];
const enemyHandElm = document.getElementById('enemyHand');
const orderElm = document.getElementById('order');
const button1Elm = document.getElementById('button_1');
const button2Elm = document.getElementById('button_2');
const button3Elm = document.getElementById('button_3');
const selectButtonElm = document.getElementsByClassName('selectButton');
const pointElm = document.getElementById('point');
let totalPoint = 0;
const timeLimitElm = document.getElementById('timeLimit');
let timeLimit = 30;
const endElm = document.getElementById('end');
endElm.innerHTML = 'おわる';
const resultElm = document.getElementById('result');
const easyModeElm = document.getElementById('easyMode');
easyModeElm.innerHTML = 'やさしい';
const normalModeElm = document.getElementById('normalMode');
normalModeElm.innerHTML = 'ふつう';
const hardModeElm = document.getElementById('hardMode');
hardModeElm.innerHTML = 'むずかしい';
const preparationElm = document.getElementById('preparation');
const preparationWordsElm = document.getElementById('preparationWords');
const goElm = document.getElementById('go');
goElm.innerHTML = 'GO!!';
goElm.style.display = 'none';
const modeSelectElm = document.getElementById('modeSelect');
const gameMainElm = document.getElementById('gameMain');
gameMainElm.style.display = 'none';
const answerElm = document.getElementById('answer');
const headerElm = document.getElementById('header');
const resultDisplayElm = document.getElementById('resultDisplay');
resultDisplayElm.style.display = 'none';
const mainTitleElm = document.getElementById('mainTitle');
mainTitleElm.innerHTML = '脳トレジャンケンゲーム'
const modeSelectTitleElm = document.getElementById('modeSelectTitle');
modeSelectTitleElm.innerHTML = '難易度をえらんでね';
const footerElm = document.querySelector('footer');
const brainOldElm = document.getElementById('brainOld');
const endWordElm = document.getElementById('endWord');
endWordElm.innerHTML = '<p>～終了しました～</p><p>結果は・・・</p>';
const endDisplayElm = document.getElementById('endDisplay');
endDisplayElm.style.display = 'none';

const setData = {
  hand,
  enemyHand,
  order,
  enemyHandElm,
  orderElm,
  button1Elm,
  button2Elm,
  button3Elm,
  selectButtonElm,
  pointElm,
  timeLimitElm,
  resultElm,
  totalPoint,
  timeLimit,
  gameMainElm,
  headerElm,
  resultDisplayElm,
  endElm,
  brainOldElm,
  endDisplayElm,
  answerElm,
};

// ヘルプ画面の処理
const easyModeHelpElm = document.getElementById('easyModeHelp');
easyModeHelpElm.innerText = '?';
easyModeHelpElm.addEventListener('click', () => {
  helpButtonAudio();
  modeSelectElm.style.display = 'none';
  footerElm.style.display = 'none';
  easyHelperElm.style.display = 'block';
});
const normalModeHelpElm = document.getElementById('normalModeHelp');
normalModeHelpElm.innerText = '?';
normalModeHelpElm.addEventListener('click', () => {
  helpButtonAudio();
  modeSelectElm.style.display = 'none';
  footerElm.style.display = 'none';
  normalHelperElm.style.display = 'block';
});
const hardModeHelpElm = document.getElementById('hardModeHelp');
hardModeHelpElm.innerText = '?';
hardModeHelpElm.addEventListener('click', () => {
  helpButtonAudio();
  modeSelectElm.style.display = 'none';
  footerElm.style.display = 'none';
  hardHelperElm.style.display = 'block';
});
let closeElm = document.getElementsByClassName('close');
closeElm = Array.from(closeElm);
closeElm.forEach(element => {
  element.innerHTML = 'もどる';
  element.addEventListener('click', () => {
    backButtonAudio();
    easyHelperElm.style.display = 'none';
    normalHelperElm.style.display = 'none';
    hardHelperElm.style.display = 'none';
    modeSelectElm.style.display = 'block';
    footerElm.style.display = 'block';
  });
});
const easyHelperElm = document.getElementById('easyHelper');
easyHelperElm.style.display = 'none';
easyHelperElm.insertAdjacentHTML('afterbegin', '<p>この難易度は</p><p>答えを間違えても</p><p>ポイントが</p><p>マイナスされません</p>');
const normalHelperElm = document.getElementById('normalHelper');
normalHelperElm.style.display = 'none';
normalHelperElm.insertAdjacentHTML('afterbegin', '<p>この難易度は</p><p>答えを間違えると</p><p>ポイントが</p><p>マイナスされます</p>');
const hardHelperElm = document.getElementById('hardHelper');
hardHelperElm.style.display = 'none';
hardHelperElm.insertAdjacentHTML('afterbegin', '<p>この難易度は</p><p>答えを間違えると</p><p>ポイントが</p><p>マイナスされます</p><p>また自分の選択する</p><p>ジャンケンの手札が</p><p>ランダムに配置されます</p>');

// 難易度選択によりゲーム開始
easyModeElm.addEventListener('click', () => {
  modeSelectAudio();
  gameMainElm.style.display = 'none';
  footerElm.style.display = 'none';
  preparation();
  modeSelectElm.style.display = 'none';
  goElm.addEventListener('click', () => {
    goAudio();
    setTimeout(() => {
      unsungHeroAudio();
    },1000);
    const easyMode = new EasyMode(setData);
    easyMode.init();
    gameMainElm.style.display = 'block';
    modeSelectElm.style.display = 'none';
    preparationElm.style.display = 'none';
  });
});

normalModeElm.addEventListener('click', () => {
  modeSelectAudio();
  gameMainElm.style.display = 'none';
  footerElm.style.display = 'none';
  preparation();
  modeSelectElm.style.display = 'none';
  goElm.addEventListener('click', () => {
    goAudio();
    normalModeAudio();
    const normalMode = new NormalMode(setData);
    normalMode.init();
    gameMainElm.style.display = 'block';
    modeSelectElm.style.display = 'none';
    preparationElm.style.display = 'none';
  });
});

hardModeElm.addEventListener('click', () => {
  modeSelectAudio();
  gameMainElm.style.display = 'none';
  footerElm.style.display = 'none';
  preparation();
  modeSelectElm.style.display = 'none';
  goElm.addEventListener('click', () => {
    goAudio();
    hinokurumaAudio();
    const hardMode = new HardMode(setData);
    hardMode.init();
    gameMainElm.style.display = 'block';
    modeSelectElm.style.display = 'none';
    preparationElm.style.display = 'none';
  });
});

// 準備OK?画面
const preparation = () => {
  setTimeout(() => {
    preparationWordsElm.innerHTML = 'ARE';
  },100);
  setTimeout(() => {
    preparationWordsElm.innerHTML = 'YOU';
  },800);
  setTimeout(() => {
    preparationWordsElm.innerHTML = 'READY?';
  },1500);
  setTimeout(() => {
    goElm.style.display = 'block';
  },2200);
};

// BGM
const unsungHeroAudio = () => {
  const music = new Audio('./mp3/Unsung_HERO.mp3');
  music.currentTime = 0;
  music.play();
  music.volume = 0.2;
};
const normalModeAudio = () => {
  const music = new Audio('./mp3/normalMode.mp3');
  music.currentTime = 0;
  music.play();
  music.volume = 0.3;
};
const hinokurumaAudio = () => {
  const music = new Audio('./mp3/hinokuruma.mp3');
  music.currentTime = 0;
  music.play();
  music.volume = 0.2;
};

// 効果音
const modeSelectAudio = () => {
  const music = new Audio('./mp3/modeSelect.mp3');
  music.currentTime = 0;
  music.play();
};
const helpButtonAudio = () => {
  const music = new Audio('./mp3/helpButton.mp3');
  music.currentTime = 0;
  music.play();
};
const backButtonAudio = () => {
  const music = new Audio('./mp3/backButton.mp3');
  music.currentTime = 0;
  music.play();
};
const goAudio = () => {
  const music = new Audio('./mp3/go.mp3');
  music.currentTime = 0;
  music.play();
};