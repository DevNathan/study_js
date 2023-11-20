const file = require("fs");

// const user = new Object();
// user.name = "조남호";
// user.id = "cnh12345";
// user.password = "1234";

// const userJSON = JSON.stringify(user);

// // writeFile('경로', '내용', '인코딩', '출력함수')
// file.writeFile("user.json", userJSON, "utf-8", function (error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("출력성공");
//   }
// });

// readFile('경로', '인코딩', '콜백함수')
let user;

// readFile은 비동기성 함수이므로 이런식으로 작성하면 undefined가 출력된다.
// file.readFile("user.json", "utf-8", function (error, content) {
//   user = JSON.parse(content);
// });

// 1번 해결 방안 : if문 안에 집어 넣어 출력되도록 한다
file.readFile("user.json", "utf-8", function (error, content) {
  if (error) {
    console.error("파일 읽기 오류:", error);
    return;
  }

  user = JSON.parse(content);
  console.log(user);
});

// 2번 해결 방안 : readFileSync 사용
// user = JSON.parse(file.readFileSync("user.json", "utf-8"));

// console.log(user);
