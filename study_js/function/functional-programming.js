// 제발 함수는 값으로 보자

data = 10;

// 이름이 없는 함수를 익명 함수라고 부르고 이를 다른 저장공간에 담을 수 있다.
data = function () {
  console.log("함수 실행");
};
data();

// ES6, 익명함수일 경우 function 키워드를 생략한 뒤 =>로 함수를 선언할 수 있는 문법
data = () => {
  console.log("함수 실행");
};
data();

function add(number1, number2, 함수) {
  함수(number1 + number2);
}

print = (result) => console.log(result);
add(1, 3, print);

// add(1, 3, (result) => console.log(result))

function add(number1, number2) {
  return () => {
    console.log(number1 + number2);
  };
}

print = add(1, 3);

print();

function add(number1, number2){
  return function() {
    return function() {
      console.log(number1 + number2);
    }
  }
}

add(1, 3)()()