// // 1-10까지 array 객체에 담은 후 짝수만 출력
// const numbers = Array.from({ length: 10 }, (data, i) => i + 1);
// console.log(numbers.filter((number) => number % 2 == 0));
// // 숫자를 한글로
// const hangeul = ["공", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
// const input = [6, 8, 7, 4];
// const output = [];
// input.map((data) => hangeul[data]).forEach((word) => output.push(word));
// console.log(output);
// // 한글은 숫자로
// const input2 = ["육", "팔", "칠", "사"];
// const output2 = input2.map((word) => hangeul.indexOf(word));
// console.log(output2);
// // 1~100까지 합 출력
// const number2 = Array.from({ length: 100 }, (data, i) => i + 1);
// let sum = 0;
// number2.forEach((data) => (sum += data));
// console.log(sum);

// 1~10까지 Array 객체에 담은 후 짝수만 출력
// const datas = new Array(10).fill(0);
// const result = datas.map((data, i) => i + 1).filter((data) => data % 2 == 0);
// console.log(result);

// 한글을 숫자로
// const hangle = "공일이삼사오육칠팔구";
// const input = "일공이사".split("");
// console.log(parseInt(input.map(c => hangle.indexOf(c)).join("")))

// 숫자를 한글로
// const hangle = "공일이삼사오육칠팔구";
// const input = "1024".split("");
// const result = input.map((c) => hangle[c]).join("");
// console.log(result);
// let input = 1024;
// let result = "";
// while (input != 0) {
//   result = hangle[input % 10] + result;
//   input = parseInt(input / 10);
// }

// console.log(result);

// 1~100까지 합 출력
// const datas = new Array(100).fill().map((v, i) => i + 1);
// const total = datas.reduce((x, y) => x + y);
// console.log(total);

// console.log("apple".split("").reduce((x, y) => y + x))

// let result = 0;
// datas.forEach(v => result += v);
// console.log(result);

console.log("apple".split("").reduce((x, y) => y + x));
