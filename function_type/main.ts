// Function as a Type

type User = { name: string; age: number };

function greetUser(user: User) {
    const greetMsg = 'hello ' + user.name;
    console.log(greetMsg);
}

function sum(num1:number,num2:number)
{
    return num1+num2;
}

function isEligible(user:User)
{
    console.log(user.age>=18)
}

// let greet:Function;
let greet:(user:User)=>void;
greet=greetUser;
let user={name:'john',age:28};
greet(user)
// not assign the greet as 100 when added function type
// greet=100;
// console.log(greet)

// greet=sum;
// console.log(greet(user))

greet=isEligible;
greet(user)