const promise = new Promise(function (Resolve, reject) {
  check = true;
  if (check) {
    Resolve("성공!");
  } else {
    Reflect("실패!");
  }
});

promise.then((result) => {
  console.log(result);
});
