class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    sayAge() {
      console.log(`I am ${this.age} years old.`);
    }
  
    haveBirthday(age) {
      console.log(`It's my birthday!`);
      this.age += 1;
    }
  }
  
  let christine = new Person('Christine', 23);
  
  christine.sayHello();
  // => Hello, my name is Christine.
  christine.sayAge();
  // => I am 23 years old.
  christine.haveBirthday();
  // => It's my birthday.
  christine.sayAge();
  // => I am 23 years old.
  christine;
  // => Person { name: 'Christine', age: 23 }