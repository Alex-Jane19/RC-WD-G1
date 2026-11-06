
// Task 1.1 without using constructor

class CanvasNode {
  readonly x: number = 0;
  readonly y: number = 0;
}

const node = new CanvasNode();

console.log(node.x);
console.log(node.y);

// Task 1.2 using constructor

class CanvasNodeWithConstructor {
  readonly x: number;
  readonly y: number;

    constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
    }
}

const node1 = new CanvasNodeWithConstructor();
const node2 = new CanvasNodeWithConstructor(10, 20);

console.log(node1.x);
console.log(node1.y);
console.log(node2.x);
console.log(node2.y);


// Task 2

class CanvasNode2 {
  x = 0;
  y = 0;

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

const node3 = new CanvasNode2();
console.log(node3.x);
console.log(node3.y);

node3.move(10, 20);

console.log(node3.x);
console.log(node3.y);


// Task 3

class CanvasNode3 {
  x: number;
  y: number;

  constructor(position?: { x: number; y: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  get position(): { x: number; y: number } {
    return {
        x: this.x,
        y: this.y,
     };
  }
}

const node4 = new CanvasNode3();
console.log(node4.position);

const node5 = new CanvasNode3({ x: 5, y: 10 });
console.log(node5.position);

node5.move(30, 40);
console.log(node5.position);


// Task 4

class CanvasNode4 {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

    // `position` getter method here
    get position(): { x: number; y: number } {
        return {
            x: this.#x,
            y: this.#y,
        };
    }

    // move method as before
    move(x: number, y: number): void {
    this.#x = x;
    this.#y = y;        
    }

    // position` setter method here
    set position(value: { x: number; y: number }) {
        this.#x = value.x;
        this.#y = value.y;
    }
}

// Checking default position
const node6 = new CanvasNode4();
console.log(node6.position);

// Checking custom position
const node7 = new CanvasNode4({ x: 10, y: 20 });
console.log(node7.position);

// Checking move method
node7.move(30, 40);
console.log(node7.position);

// Checking setter
node7.position = { x: 50, y: 100 };
console.log(node7.position);
