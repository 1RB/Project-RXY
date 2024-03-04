interface Person {
    firstName: string;
    lastName: string;
    greet(): string;
}

class Student implements Person {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }

    greet() {
        return `Hello, my name is ${this.fullName}`;
    }
}

let user: Person = new Student("John", "Doe");

console.log(user.greet());