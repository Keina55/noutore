'use strict';

// 普通のモード
class NormalMode {
  constructor({
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
    answerElm
  })
  {
    this.hand = hand;
    this.enemyHand = enemyHand;
    this.order = order;
    this.enemyHandElm = enemyHandElm;
    this.orderElm = orderElm;
    this.button1Elm = button1Elm;
    this.button2Elm = button2Elm;
    this.button3Elm = button3Elm;
    this.selectButtonElm = selectButtonElm;
    this.pointElm = pointElm;
    this.timeLimitElm = timeLimitElm;
    this.resultElm = resultElm;
    this.totalPoint = totalPoint;
    this.timeLimit = timeLimit;
    this.gameMainElm = gameMainElm;
    this.headerElm = headerElm;
    this.resultDisplayElm = resultDisplayElm;
    this.endElm = endElm;
    this.brainOldElm = brainOldElm;
    this.endDisplayElm = endDisplayElm;
    this.answerElm = answerElm;
    this.correctMusic = new Audio('./mp3/correct.mp3');
    this.unCorrectMusic = new Audio('./mp3/unCorrect.mp3');
    this.normalModeMusic = new Audio('./mp3/normalMode.mp3');
  }

  init() {
    this.gameStart();
  }

  gameStart() {
    this.pointElm.innerHTML = `現在${this.totalPoint}ポイント`;
    this.enemyHandElm.innerHTML = this.enemyHand[Math.floor(Math.random() * this.enemyHand.length)];
    this.orderElm.innerHTML = this.order[Math.floor(Math.random() * this.order.length)];
    this.button1Elm.innerHTML = this.hand[0];
    this.button2Elm.innerHTML = this.hand[1];
    this.button3Elm.innerHTML = this.hand[2];
    this.countDownTimer();
    this.nextGame();
  }

  nextGame() {
    // 自分の手がグーの時
    this.button1Elm.addEventListener('click', () => {
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_gu.png">') {
        if (this.orderElm.innerHTML === '引き分けて！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_choki.png">') {
        if (this.orderElm.innerHTML === '勝って！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_pa.png">') {
        if (this.orderElm.innerHTML === '負けて！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      this.pointElm.innerHTML = `現在${this.totalPoint}ポイント`;
      this.enemyHandElm.innerHTML = '';
      this.orderElm.innerHTML = '';
      this.enemyHandElm.innerHTML = this.enemyHand[Math.floor(Math.random() * this.enemyHand.length)];
      this.orderElm.innerHTML = this.order[Math.floor(Math.random() * this.order.length)];
    });
    // 自分の手がチョキの時
    this.button2Elm.addEventListener('click', () => {
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_gu.png">') {
        if (this.orderElm.innerHTML === '負けて！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_choki.png">') {
        if (this.orderElm.innerHTML === '引き分けて！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_pa.png">') {
        if (this.orderElm.innerHTML === '勝って！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      this.pointElm.innerHTML = `現在${this.totalPoint}ポイント`;
      this.enemyHandElm.innerHTML = '';
      this.orderElm.innerHTML = '';
      this.enemyHandElm.innerHTML = this.enemyHand[Math.floor(Math.random() * this.enemyHand.length)];
      this.orderElm.innerHTML = this.order[Math.floor(Math.random() * this.order.length)];
    });
    // 自分の手がパーの時
    this.button3Elm.addEventListener('click', () => {
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_gu.png">') {
        if (this.orderElm.innerHTML === '勝って！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_choki.png">') {
        if (this.orderElm.innerHTML === '負けて！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      if (this.enemyHandElm.innerHTML === '<img src="./img/janken_pa.png">') {
        if (this.orderElm.innerHTML === '引き分けて！') {
          this.totalPoint++;
          this.correctAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/maru.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
        } else {
          this.unCorrectAudio();
          this.answerElm.innerHTML = '';
          this.answerElm.innerHTML = '<img src="./img/batsu.png" />';
          setTimeout(() => {
            this.answerElm.innerHTML = '';
          }, 500);
          if (this.totalPoint > 0) {
            this.totalPoint--;
          }
        }
      }
      this.pointElm.innerHTML = `現在${this.totalPoint}ポイント`;
      this.enemyHandElm.innerHTML = '';
      this.orderElm.innerHTML = '';
      this.enemyHandElm.innerHTML = this.enemyHand[Math.floor(Math.random() * this.enemyHand.length)];
      this.orderElm.innerHTML = this.order[Math.floor(Math.random() * this.order.length)];
    });
  }

  // BGM関連の呼び出し
  correctAudio() {
    this.correctMusic.currentTime = 0;
    this.correctMusic.play();
  }

  correctStopAudio() {
    this.correctMusic.pause();
    this.correctMusic.currentTime = 0;
  }

  unCorrectAudio() {
    this.unCorrectMusic.currentTime = 0;
    this.unCorrectMusic.play();
  }

  unCorrectStopAudio() {
    this.unCorrectMusic.pause();
    this.unCorrectMusic.currentTime = 0;
  }

  normalModeStopAudio() {
    this.normalModeMusic.pause();
    this.normalModeMusic.currentTime = 0;
  }

  drumAudio() {
    const music = new Audio('./mp3/drum.mp3');
    music.currentTime = 0;
    music.play();
  }

  // カウントダウンタイマーからの連動
  countDownTimer() {
    let countDown = setInterval(() => {
      this.timeLimitElm.innerHTML = `あと${this.timeLimit}秒`;
      this.timeLimit--;
    }, 1000);

    setTimeout(() => {
      clearInterval(countDown);
      // ここにゲームの終了あとの処理を入れる
      this.gameMainElm.style.display = 'none';
      this.headerElm.style.display = 'none';
      this.endDisplayElm.style.display = 'block'
      this.correctStopAudio();
      this.unCorrectStopAudio();
      this.normalModeStopAudio()
      this.drumAudio();
      setTimeout(() => {
        this.endDisplayElm.style.display = 'none'
        this.resultDisplayElm.style.display = 'block';
        this.result();
      }, 2000);      
    }, 31000);
  }

  // 結果画面の呼び出し
  result() {
    if (this.totalPoint > 29) {
      this.brainOldElm.innerHTML = '<p>素晴らしい</p><p>あなたの脳年齢は</p><p>20代です</p>';
    } else if (this.totalPoint > 24) {
      this.brainOldElm.innerHTML = '<p>あなたの脳年齢は</p><p>30代です</p>';
    } else if (this.totalPoint > 19) {
      this.brainOldElm.innerHTML = '<p>あなたの脳年齢は</p><p>40代です</p>';
    } else if (this.totalPoint > 14) {
      this.brainOldElm.innerHTML = '<p>あなたの脳年齢は</p><p>50代です</p>';
    } else if (this.totalPoint > 9) {
      this.brainOldElm.innerHTML = '<p>あなたの脳年齢は</p><p>60代です</p>';
    } else if (this.totalPoint > 4) {
      this.brainOldElm.innerHTML = '<p>あなたの脳年齢は</p><p>70代です</p>';
    } else if (this.totalPoint > 0) {
      this.brainOldElm.innerHTML = '<p>あなたの脳年齢は</p><p>80代です</p>';
    } else {
      this.brainOldElm.innerHTML = '<p>あなたの脳年齢は</p><p>90代です</p>';
    }
    this.resultElm.innerHTML = `<p>あなたの得点は</p><p>${this.totalPoint}ポイント</p><p>でした</p>`;
    this.endElm.addEventListener('click', () => {
      location.reload();
    });
  }  
}

export default NormalMode;