// 1. Returning a Number

function add(num1: number, num2: number) {
    console.log(num1+num2);
}

console.log(add(12,22))

// Explanation: This function returns the sum of two numbers, and the return type is explicitly defined as number.

// 2. Returning a String
function greet(name: string): string {
    return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!

// Explanation: The function returns a greeting message as a string. The return type is string.

// 3)Returning a Boolean
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(10)); // Output: true
console.log(isEven(7));  // Output: false

// Explanation: This function checks if a number is even and returns a boolean (true or false).

// 4)Returning an Array

function getFruits(): string[] {
    return ["Apple", "Banana", "Cherry"];
}

console.log(getFruits()); // Output: [ 'Apple', 'Banana', 'Cherry' ]

// Explanation: The function returns an array of strings, and the return type is defined as string[].


// 6) Returning an Object

function getUser(): { name: string, age: number } {
    return { name: "Alice", age: 30 };
}

console.log(getUser()); // Output: { name: 'Alice', age: 30 }

// Explanation: The function returns an object with a name and age property. The return type is an object with the structure { name: string, age: number }.

// 7)Returning void

function logMessage(message: string): void {
    console.log(message);
}

logMessage("This is a message"); // Output: This is a message
// Explanation: The logMessage function doesn't return anything. The return type is void, which indicates the absence of a return value.


// 8)Returning a Union Type

function processInput(input: string | number): string {
    if (typeof input === "string") {
        return "You entered a string: " + input;
    } else {
        return "You entered a number: " + input.toString();
    }
}

console.log(processInput("hello")); // Output: You entered a string: hello
console.log(processInput(123));     // Output: You entered a number: 123

// Explanation: This function can accept either a string or a number and returns a string in both cases. The return type is string.

// 9) Returning Promise

function fetchData(url: string): Promise<string> {
    return fetch(url)
        .then(response => response.text())
        .then(data => data)
        .catch(error => "Error: " + error.message);
}

fetchData("https://example.com").then(data => console.log(data));


// Explanation: The function returns a Promise that eventually resolves to a string. The return type is Promise<string>