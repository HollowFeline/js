//1) створити функцію яка приймає масив та виводить його
function massShow(mass = []) {
    for (const mass1 of mass) {
        console.log(mass1)
    }
}
massReturn([14, 24, 13, 88])

//2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function random(mass = []){
    for(let i = 0; i < 5; i++){
        mass.push(Math.floor(Math.random() * (100-1) + 1))
    }
    massShow(mass);
}

let mass = [];
random(mass)

//3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function lessNumber(a, b, c) {
    if(a < b && a < c) console.log(`Найменше ${a}`)
    if(b < a && b < c) console.log(`Найменше ${b}`)
    if(c < b && c < a) console.log(`Найменше ${c}`)
}

lessNumber(7, 6, 4);

//4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function mostNumber(a, b, c) {
    if(a > b && a > c) console.log(`Найбільше ${a}`)
    if(b > a && b > c) console.log(`Найбільше ${b}`)
    if(c > b && c > a) console.log(`Найбільше ${c}`)
}

mostNumber(55, 23, 55);

//5) створити функцію яка повертає найбільше число з масиву
function mostNumber(mass = []) {
    let max = mass[0];
    for (const mass1 of mass) {
        if(mass1 > max) max = mass1
    }
    return max
}

console.log(mostNumber([-1, -3, -2]))

//6) створити функцію яка повертає найменьше число з масиву
function lessNumber(mass = []) {
    let min = mass[0];
    for (const mass1 of mass) {
        if(mass1 < min) min = mass1
    }
    return min
}

console.log(lessNumber([3, 11, 88]))

//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function summ(mass = []){
    let sum = 0;
    for (const mass1 of mass) {
            sum += mass1;
    }
    return sum;
}

console.log(summ([3, 11, 5]))

//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(mass = []){
    let sum = 0;
    for (const mass1 of mass) {
        sum += mass1;
    }
    return sum/mass.length;
}

console.log(arithmeticMean([4, 3, 5, 8]))

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function getObjKeys(obj = []){
    let keyMass = [];
    for (const objElement of obj) {
        //keyMass = keyMass.concat(Object.keys(objElement))
        for (const objElementKey in objElement) {
                keyMass.push(objElementKey)
        }
    }
    return keyMass;
}

console.log(getObjKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]))

//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function getObjValues(obj = []){
    let valMass = [];
    for (const objElement of obj) {
        for (const objElementKey in objElement) {
                valMass.push(objElement[`${objElementKey}`])
        }
    }
    return valMass;
}

console.log(getObjValues([{name: 'Dima', age: 13}, {model: 'Camry'}]))

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function summ(mass1 = [], mass2 = []){
    let summArray = [];
    for(let i = 0; i < mass1.length && i < mass2.length; i++){
        summArray[i] = mass1[i] + mass2[i];
    }
    return summArray;
}

console.log(summ([1,2,3,4],[2,3,4,5]))

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax(){
    let min = arguments[0]; //псевдомасив, нема методів Array
    let max = arguments[0];
    for (const argumentsKey of arguments) {
        if(argumentsKey < min) min = argumentsKey
        if(argumentsKey > max) max = argumentsKey
        console.log(max)
    }
    console.log(`Max: ${max}`);
    return min;
}

console.log('Min: ' + minMax(4, 7, 15, 2))

// Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
function getObjKeys(obj = [], whatReturn = ''){
    let mass = [];
    if(whatReturn === 'keys'){
        for (const objElement of obj) {
            for (const objElementKey in objElement) {
                mass.push(objElementKey)
            }
        }
        return mass;
    }
    if(whatReturn === 'values'){
        for (const objElement of obj) {
        for (const objElementKey in objElement) {
                mass.push(objElement[`${objElementKey}`])
        }
    }
    return mass;
    }
}

console.log(getObjKeys([{name: 'Dima', age: 13}, {model: 'Camry'}],'keys'))

//- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function swapNumbers(mass = [], i){
    for (const mass1 in mass) {
        if(mass1 == i){
            let a = mass[i];
            mass[i] = mass[i + 1];
            mass[i + 1] = a;
        }
    }
    // for(let j = 0; j < mass.length; j++){
    //     if(i === j){
    //         let a = mass[j];
    //         mass[j] = mass[j + 1];
    //         mass[j + 1] = a;
    //     }
    // }
    for (const mass1 of mass) {
        console.log(mass1);
    }
}

swapNumbers([9,8,0,4], 2)

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function nullToEnd(mass = []){
    let done = []
    let count = 0;
    for (const massElement of mass) {
        massElement === 0 ? count++ : done.push(massElement)
    }
    for (let i = 0; i < count; i++){
        done.push(0);
    }
    mass = done;

    for (const massElement of mass) {
        console.log(massElement)
    }
}

nullToEnd([0,0,1,0])

//- Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function toValidName(name = '') {
    name = name.trim();
    for(let i = 0; i < name.length; i++){
        name = name.replace('  ',' ')
    }
    console.log(name)
}
toValidName(n1)
toValidName(n2)
toValidName(n3)