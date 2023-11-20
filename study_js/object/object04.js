// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다. 단, 반드시 대문자로 시작해준다.

function User(id, pw, name, age) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
  }
  
  han = new User("hds1234", "1234", "한동석", 20);
  hong = new User("hgd1234", "1234", "홍길동", 30);
  lee = new User("lss1234", "1234", "이순신", 40);
  
  console.log(han, hong, lee);