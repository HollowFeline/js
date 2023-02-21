// let numbers = [];
// numbers[0] = 11;
// numbers[2] = 33;
//
// for(const number of numbers){
//     console.log(number);
// }

// let mass = [13, 'qwerty', true, 'Alex', 44 , 0 , false, 'sho'];
//
// for(const mas of mass){
//     if(typeof mas === "number")  console.log(mas)
// }
// console.log('------------')
//
// for(const mas of mass){
//     if(typeof mas === "string" && mas.length >= 4)  console.log(mas)
// }
// console.log('------------')
//
// for(const mas of mass){
//     if(typeof mas === "boolean" && mas)  console.log(mas)
// }

// let mass = [];
// for(let i = 0; i < 100; i++){
//     mass.push(i + 1);
// }
//
// for(let mas in mass){
//     console.log(mas)
// }
// console.log('------------')
//
// for(let mas in mass){
//     if(mas % 2 === 0) console.log(mas)
// }
// console.log('------------')
//
// for(let mas in mass){
//     if(mas % 3 === 0) console.log(mas)
// }

// let mass = ['js', 'css', 'jq'];
//
// let value = mass.shift();
// console.log(value);
//
// console.log(mass.pop());
// //---------------------------
// let numbers = [1, 2, 3, 4, 5];
// let letters = ['a', 'b', 'c']
// let dNumbers =[];
// dNumbers.push(numbers.pop());
// dNumbers.push(numbers.pop());
//
// numbers = numbers.concat(letters);
// numbers = numbers.concat(dNumbers.reverse());
//
// for (let number of numbers){
//     console.log(number)
// }
//----------------------------
// let numbers = [1, 2, 3, 4, 5];
// let letters = ['a', 'b', 'c', 'e']
// let dNumbers =[];
//
// for(let i = 0; i < 3; i++){
//     dNumbers.push(numbers.pop());
// }
// numbers.push(letters[0]);
// numbers.push(letters[1]);
// numbers.push(dNumbers.pop());
// numbers.push(dNumbers.pop());
// numbers.push(letters[2]);
// numbers.push(dNumbers.pop());
// numbers.push(letters[3]);
//
// for(let num of numbers){
//     console.log(num);
// }
//-----------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let dNumbers =[];
// let cNumbers =[];
//
// for(let number of numbers){
//     if(number % 2 === 0) console.log(number)
// }
//
// for(let number of numbers){
//     dNumbers.push(number);
// }
// console.log('--------------------')
// for(let number of dNumbers){
//     console.log(number)
// }
// console.log('--------------------')
// for(let i = 0; i < numbers.length; i++){
//     cNumbers.push(numbers[i]);
// }
// for(let number of cNumbers){
//     console.log(number)
// }

//let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < numbers.length){
//     if(i % 2) console.log(numbers[i])
//     i++
// }
// console.log('--------------')
//
// for (let i = 1; i < numbers.length; i = i + 2){
//     console.log(numbers[i])
// }
// console.log('--------------')
//
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 3 === 0) {
//         numbers[i] = "Sasha";
//     }
// }
// for(let number of numbers){
//     console.log(number)
// }
//
// let i = numbers.length - 1;
// while(i >= 0){
//     console.log(numbers[i]);
//     i--
// }
//
// let numbers = [];
// let i = 1;
// while(numbers.length < 50){
//     if(i % 2 === 0) numbers.push(i);
//     i++
// }
// for(let number of numbers){
//     console.log(number)
// }
// console.log('-------------')
// i = 0;
// numbers = [];
// while(numbers.length < 50){
//     if(i % 2) numbers.push(i);
//     i++
// }
// for(let number of numbers){
//     console.log(number)
// }


//let numbers = [];
// for(let i = 0; i < 20; i++){
//     numbers.push(Math.round(Math.random()*100));
// }
// for(let number of numbers){
//     console.log(number)
// }
//
// for(let i = 0; i < 20; i++){
//     numbers.push(Math.random() * (732-8) + 8 );
// }
// for(let number of numbers){
//     console.log(number)
// }

// let numbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i + 1] % 2 === 0) console.log(numbers[i])
// }

// let numbers = [100,250,50,168,120,345,188];
// let sum = 0;
//
// for(let number of numbers){
//     sum = sum + number;
// }
// console.log(sum/2);

// let numbers = [];
// let newNumbers = [];
// for(let i = 0; i < 10; i++){
//     numbers.push(Math.floor(Math.random() * (100-1) + 1))
// }
//
// for(let number of numbers){
//     newNumbers.push(number * 5)
// }
// for(let number of newNumbers){
//     console.log(number)
// }

// let letters = [ 'a', 'b', 'c'];
// let word = '';
//
// for(let i = 0; i < letters.length; i++){
//     word += letters[i];
// }
//
// let i =0;
// while(i < letters.length){
//     word += letters[i++];
// }
//
// for(let letter of letters){
//     word += letter;
// }
//
// console.log(word);

