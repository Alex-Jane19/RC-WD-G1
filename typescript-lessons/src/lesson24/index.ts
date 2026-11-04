
 // Task 1 

const example1: string = "Hello World!";
const example2: number = 42;
const example3: boolean = true;
const example4: symbol = Symbol();
const example5: bigint = 123n;
console.log(example1, example2, example3, example4, example5);


 // Task 2 - Concatenate Two Strings

const concatTwoStrings = (a: string, b: string): string => {
    return [a, b].join(" ");
};

console.log(concatTwoStrings("Hello", "World"));


 // Task 3 - Add Two Numbers

const add = (a: number, b: number): number => {
    return a + b;
};

const result: number = add(10, 20);

console.log(result);
