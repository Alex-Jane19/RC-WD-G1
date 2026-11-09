
//* Task 1 - creating interface User

interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber?: string;
    readonly createdAt: Date | string;
}

const myUser: User = {
    id: 1,
    name: "Alex",
    email: "alex@example.com",
    createdAt: new Date(),
}

// Test 1: Changing ID
myUser.id = 2;

// Test 2: Changing createdAt
// myUser.createdAt = "2026-11-09";

console.log(myUser);


//* Task 2 - creating interface StringFilterFn

interface StringFilterFn {
    (array: string[], criterion: string): string[];
}

const filterLength: StringFilterFn = (array, criterion) => {
    const minLength = Number(criterion);

    return array.filter((word) => word.length > minLength);
}

// Testing
const fruits = ["apple", "banana", "kiwi", "cherry", "orange"];

console.log(filterLength(fruits, "5"));

