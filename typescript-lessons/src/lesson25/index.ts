
// Task 1

const concatName = (first: string, last?: string) => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
};

const name1 = concatName("John", "Doe");
const name2 = concatName("John");

console.log(name1);
console.log(name2);


// Task 2

const concatTwoStrings = (a: string, b: string) => {
    return [a, b].join(" ");
};

const strings = concatTwoStrings("Hello", "World");

console.log(strings); // Hello World


// Task 3

const add = (a: number, b: number): number => {
    return a + b;
};

const number = add(10, 20);

console.log(number); // 30


// Task 4

type User = {
    id: string;
    name: string;
};

const modifyUser = (
    users: User[],
    id: string,
    makeChange: (user: User) => User
): User[] => {
    return users.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }

        return u;
    });
};

const users: User[] = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];

const updatedUsers = modifyUser(users, "1", (user) => {
    return { ...user, name: "Waqas" };
});

console.log(updatedUsers);
console.log(users);
