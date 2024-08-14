function greetUser(name: string): void {
    console.log('Hello ' + name);
}
greetUser('John');

function createError(errorMsg: string, errorCode: number): never {
    throw { message: errorMsg, code: errorCode };
}

// Call greetUser, which outputs directly to the console
greetUser('Marks');

// Handle error with try-catch since createError throws an error
try {
    createError('Page not Found', 404);
} catch (error) {
    console.error('Caught an error:', error);
}


function infinite()
{
    while(true)
    {
        
    }
}
// commit the changes