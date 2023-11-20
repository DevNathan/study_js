// 두 정수의 덧셈 결과 출력
// function add(number1, number2, callback) {
//   if (callback) {
//     callback(number1 + number2);
//   }
//   return number1 + number2;
// }

// const print = (result) => {
//   console.log(result);
// };

// const result = add(1, 5, print);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// function mul(number1, number2, callback) {
//   if (callback) {
//     callback(number1 * number2);
//   }
//   return number1 * number2;
// }

// mul(3, 5, (result) => {
//   console.log(result * 2);
// });

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
// function getFullName(lastName, firstName, callback) {
//   if (callback) {
//     callback(lastName + firstName);
//   }
//   return lastName + firstName;
// }

// getFullName('한', '동석', function(fullName) {console.log(`${fullName}님`)})

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false
// function getCount(price, total, callback) {
//   if (callback) {
//     return callback(total / price);
//   }
//   return total / price;
// }

// const checkCount = (count) => count <= 5;

// // console.log(getCount(1000, 6000, checkCount))
// console.log(getCount(1000, 5000));

// 결제 상품 이름과, 결제 상태를 전달받아서
// 결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소 출력
function getPayStatus(name, status, callback) {
  if (callback) {
    return callback(name, status ? "결제 성공" : "결제 실패");
  }
}

const result = getPayStatus(
  "키보드",
  false,
  (name, message) => `${name} ${message}`
);
console.log(result);
