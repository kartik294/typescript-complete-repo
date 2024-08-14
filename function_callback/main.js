// let addNumbers:(n1:number,n2:number)=>number;
// function sum(num1:number,num2:number)
// {
//     return num1+num2;
// }
// function add(num1:number,num2:number)
// {
//     console.log(num1+num2);
// }
// addNumbers=sum;
// addNumbers=add;
function getResult(num1, num2, print) {
    var result = num1 + num2;
    print('Sum=', result);
}
function display(str, result) {
    console.log(str + result);
}
// Corrected function call
getResult(12, 13, display);
