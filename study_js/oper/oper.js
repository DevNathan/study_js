// == : 값만 비교, 문자열일 경우 자동으로 파싱된다, "1" == 1 == true
// === : 값과 타입 모두 비교, "1" === 1 == false

// data1 = "1";
// data2 = 1;

// console.log(data1 === data2);

// "", null, 0, undefined : false로 취급되는 값
// let data;

// if (!data) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let data;
// data = data || 1;
// console.log(data);

// &&: 선행 조건식이 false면 뒤로 넘어가지 않고, 선행 조건식이 true면 뒤에 있는 값으로 대체된다.
// let check = false;
// console.log(check && 10);

// 삼항 연산자
// 조건식 ? 참 : 거짓

let check = false;
console.log(check ? 10 : 20);
