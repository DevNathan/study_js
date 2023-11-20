// const user = {
//   name: "한동석",
//   age: 20,
//   address: "경기도",
//   introduce: () => {
//     console.log("안녕하세요.");
//   },
// };
// console.log(typeof user);
// console.log(user);
// user.introduce();
// console.log(user["address"]);

// .로 직접 접근할 수도 있고, KEY값의 규칙성이 필요하다면 [""]문법을 사용하여 접근한다.
const products = {
    product1: '지우개',
    product2: '키보드',
    product3: '마우스',
    product4: '연필',
    product5: '노트북',
  }
  
  products.product6 = '커피';
  products.product1 = '도화지';
  products.message = () => {console.log("상품 목록")}
  
  for(let i in products){
    console.log(products[i]);
  }
  
  products.message();