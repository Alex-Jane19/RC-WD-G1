
//* Task 1 - Worker and Developer

class Worker {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  work(): string {
    return `${this.name} працює.`;
  }
}

class Developer extends Worker {
  programmingLanguage: string;

  constructor(name: string, programmingLanguage: string) {
    super(name);
    this.programmingLanguage = programmingLanguage;
  }

  override work(): string {
    return `${this.name} пише код на ${this.programmingLanguage}.`;
  }
}

// Testing

const worker = new Worker("Alex");
const developer = new Developer("Jane", "TypeScript");

console.log(worker.work());
console.log(developer.work());


//* Task 2- Rectangle and Square

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  side: number;

  constructor(side: number) {
    super(side, side);
    this.side = side;
  }

  describe(): string {
    return `Квадрат зі стороною ${this.side} має площу ${super.getArea()}`;
  }
}

// Testing

const rectangle = new Rectangle(6, 4);
const square = new Square(5);

console.log(rectangle.getArea());
console.log(square.getArea());
console.log(square.describe());


//* Task 3 - Bank Account and Savings Account

class BankAccount {
  protected balance: number;

  constructor(initialBalance: number) {
  this.balance = initialBalance;
}

  deposit(amount: number): void {
    this.balance += amount;
  }
}

class SavingsAccount extends BankAccount {
  addInterest(rate: number): void {
    this.balance += this.balance * (rate / 100);
  }

  getBalance(): number {
    return this.balance;
  }
}

// Testing

const savings = new SavingsAccount(1000);

console.log(savings.getBalance());

savings.deposit(500);
console.log(savings.getBalance());

savings.addInterest(10);
console.log(savings.getBalance());
