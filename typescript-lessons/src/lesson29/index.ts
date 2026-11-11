
//* Task 1 - function wrapInArray

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numArr = wrapInArray(42); 
const strArr = wrapInArray("hello"); 

console.log(numArr);
console.log(strArr);


//* Task 2 - function getLength

interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

console.log(getLength([1, 2, 3]));
console.log(getLength("TypeScript"));
// console.log(getLength(123)); // TypeScript error


//* Task 3 - function first

function first<T>(coll: Array<T>): T | null {
  return coll[0] ?? null;
}

console.log(first([]));
console.log(first([3, 2]));
console.log(first(["code-basics", "hexlet"]));
console.log(first([0, 5, 10]));
console.log(first([false, true]));


//* Task 4 - function getProperty

function getProperty<T, K extends keyof T>(
    obj: T, 
    key: K
): T[K] {
  return obj[key];
}

const user = { 
    id: 1, 
    name: "Олена" 
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "id"));
// console.log(getProperty(user, "age")); // TypeScript error