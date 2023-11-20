// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`response: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((users) => {
//     if (!users || users.length == 0) {
//       throw new Error(`none result`);
//     }
//     // users를 map으로 변형시켜 출력시키는 방법
//     return users.map((user) => user.address.zipcode);
//     // users.forEach((user) => {
//     //   console.log(user.address.zipcode);
//     // });
//   })
//   .then(console.log)
//   .catch((error) => {
//     console.error(error);
//     console.log("error");
//   });

// await 문법으로 바꾸기

async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`response: ${response.status}`);
    }
    let users = await response.json();
    if (!users || users.length == 0) {
      throw new Error(`none result`);
    }
    users = users.map((user) => user.address.zipcode);
    console.log(users);
  } catch (error) {
    console.error(error);
    console.log("error");
  }
}

getUsers();
