// 基礎編 問題

// Q1 変数
let nickname = 'みーちゃん';
let age = '私のニックネームは' + nickname + 'です。年齢は26歳です。';
console.log(age);

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
  console.log(user.age);
  
// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello！');
}
user.sayHello();

// Q8 引数
let calc = {
  add: function(x, y) {
    console.log(x + y);
  },
  subtract: function(x, y) {
    console.log(x - y);
  },
  multiply: function(x, y) {
    console.log(x * y);
  },
  divide: function(x, y) {
    console.log(x / y);
  }
}
calc.add(3, 4);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(25, 5);

// Q9 返り値
function remainder(x, y) {
  return x % y;
}
console.log( 5 + 'を' + 3 + 'で割った余りは' + remainder(5, 3) + 'です。');

// Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);
// ⇩ 理由
// Javascriptでは関数がないのみスコープが有効で、関数の中で定義した変数はその関数の中でしか参照できないから。


// 応用編 問題

// Q1 標準組み込みオブジェクト
let random = Math.random() * 10;
console.log('random => ', random);

// Q2 コールバック関数
function setTimeout () {
  console.log('Hello World!');
}
setTimeout ('Hallo World!', 3000);

// Q3 if
let num = 1;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < 7; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
        console.log('odd');
    }
  } else {
    console.log('not number');
  }
}