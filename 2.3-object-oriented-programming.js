// OOP is a programming style where you structure the code using object.

// Key Concept to OOP
// 1. Classes - a blueprint for creating objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// 2. Object(Instances) - create object from classes using the new keyword
const john = new Person("John", 30);
john.greet(); // Hello, my name is John

// 3. Inheritance - create a new class based on an existing one.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the parent class constructor
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const alice = new Student("Alice", 22, "S123");
alice.greet();  // Inherited from Person
alice.study();  // Specific to Student

// 4. Encapsulatiob - keep internal details private and only expose whats necessary
class BankAccount {
  #balance = 0; // Private property (with #)

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
