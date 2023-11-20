let datas = [20, 5, 6, 12, 10];
// console.log(typeof(datas));
// console.log(datas);

// push(): 가장 마지막에 값 추가
// datas.push(100);
// console.log(datas);
// console.log(datas[2]);

// for(let i in datas){
//   console.log(i);
// }

// join(): 전달한 값으로 구분한 뒤 문자열로 리턴
// console.log(typeof [1, 2, 3, 4, 5].join(","))
// naver/news/1
// console.log(['naver', 'news', 1].join('/'))

// slice(begin, end)
// 원하는 부분을 추출하기 위해 시작 인덱스(inclusive)와
// 마지막 인덱스(exclusive)를 전달한다.
// console.log(datas.slice(1, 3));
// console.log(datas);

// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
// console.log(datas.slice(2));

// pop(): 마지막 요소를 삭제
// console.log(datas.pop());
// console.log(datas);

// shift(): 첫 번째 요소를 삭제
// console.log(datas.shift());
// console.log(datas);

// splice(인덱스, 개수): 삭제
// console.log(datas);
// datas.splice(1, 1);
// console.log(datas);

// splice(인덱스, 개수, ...args): 교체
// console.log(datas);
// // datas.splice(1, 1, 0);
// datas.splice(1, 3, 0);
// console.log(datas);

// for (let i of datas) {
//   console.log(i);
// }

// forEach(callback): 반복문
// datas.forEach(function (data, i, datas) {
//   console.log(data);
// });
// datas.forEach((data) => {
//   console.log(data);
// });
// datas.forEach(console.log);

// datas.forEach((data, i, datas) => {
//   datas[i] = data * data;
// });

// console.log(datas);

// indexOf(값): 값을 해당 Array에서 찾은 뒤 인덱스 번호 리턴, 못찾으면 -1 리턴
// console.log(datas.indexOf(10));
// console.log(datas.indexOf(-4516));

// map(callback): 기존 값을 원하는 값으로 변경하여 리턴
// console.log(datas.map(function(data){return 10;}));
// console.log(datas);

//기존 값을 전부 2로 나눈 값으로 변경
// console.log(datas.map((data) => parseInt(data / 2)));

// console.log(
//   datas.filter(function (data) {
//     return data % 2 == 0;
//   })
// );

// numbers 배열에 1~7로 체우기
const numbers = new Array(7).fill(0);
// for (let i = 0; i < 7; i++) {
//   numbers[i] = i + 1;
// }
console.log(numbers.map((data, i) => i + 1));
