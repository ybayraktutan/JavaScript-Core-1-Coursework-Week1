function createLongGreeting (firstName, age) {
    let message = "Hello, my name is " + firstName + " and I'm " + age + " years old";
    return message;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
