// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.

// const mart = {};
// mart.customers = {};

// mart.customers.customer1 = {
//   name: "홍길동",
//   age: 30,
//   포인트: 3500,
// };

// mart.customers.customer2 = {
//   name: "이순신",
//   age: 22,
//   포인트: 0,
// };

// mart.customers.customer3 = {
//   name: "장보고",
//   age: 66,
//   포인트: 9500,
// };

// console.log(mart.customers);

const market = new Object();

const user1 = { name: "홍길동", age: 30, point: 3500 };
const user2 = { name: "이순신", age: 22, point: 0 };
const user3 = { name: "장보고", age: 66, point: 9500 };

market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

for (let i in market) {
  console.log(market[i].point);
}
