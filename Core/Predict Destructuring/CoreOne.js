// /////Queestion 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)  ////'Tesla', 'Mercedes', 'Honda'
// console.log(otherRandomCar) ////'Tesla', 'Mercedes'


// /////Question 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); ////Error beecause name is not a variable its inside employee
// console.log(otherName); ////Elon


// ///Question 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); ///123345
// console.log(hashedPassword); ////Undefined password has nothing to go into at all


///Question 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second); //2,5 false 
// console.log(first == third); //2,2 true


// ///Question 5
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output 
//T
// console.log(key);   ///Value
// console.log(secondKey); //[1,5,1,8,3,3]
// console.log(secondKey[0]);//1
// console.log(willThisWork); ///5