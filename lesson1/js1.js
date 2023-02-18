// let str1 = "hello";
// let str2 = "owu";
// let str3 = "com";
// let str4 = "ua";
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let num7 = 16;
// let bl1 = true;
// let bl2 = false;
//
// console.log(str1);
// alert(str1);
// document.write(str1);

// console.log(num4);
// alert(num4);
// document.write(num4);

// let name = prompt("Enter name");
// let surName = prompt("Enter surname");
// let age = prompt("Enter age");
// alert(`Вітаю ${name} ${surName}. Тобі ${age} років.`)

// let sum = str1+str2+str3+str4+num1+num2+num3+num4+num5+num6+num7+bl1+bl2;
// console.log(sum); //result string

// let num = +prompt('Enter number');
// console.log(num);
//
// num1 = parseInt(prompt('Enter number 1'));
// num2 = parseInt(prompt('Enter number 2'));
// console.log(num1+num2); //result number

// num1 = parseFloat(prompt('Enter number 1'));
// num2 = parseFloat(prompt('Enter number 2'));
// console.log(num1+num2); //result float

// num1 = Math.round(prompt('Enter number 1'));
// num2 = Math.round(prompt('Enter number 2'));
// console.log(num1+num2);

// num1 = prompt('Enter number 1');
// num2 = prompt('Enter number 2');
// console.log(Math.pow(num1,num2));

// let a = 100; let b = '100'; let c = true;
// console.log(typeof a, typeof b, typeof c);

// Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
// 5 ? 6 -> true    <
// 5 ? 6 -> false   >
// 5 ? 6 -> false   ===
// 5 ? 6 -> false   >=
// 10 ? 10 -> true  ===
// 10 ? 10 -> true  <=
// 10 ? 10 -> false     !=
// 10 ? 10 -> false     <
// 10 ? 10 -> false     >
// 123 ? '123' -> false     ===
// 123 ? '123' -> true      ==


//Перше завдання з допів
// console.log(132 > 100 && 45 < 12 ); //f
// console.log(34 > 33 && 23 < 90 );//t
// console.log(99 > 100 && 45 > 12 );//f
// console.log(132 > 100 || 45 < 12 );//t
// console.log(111 > 11 || 45 < 111 );//t
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//t
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//t
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//f
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//t
// console.log(!!'-1');//t
// console.log(!!-1);//t
// console.log(!!'0');//t
// console.log(!!'null');//t
// console.log(!!'undefined');//t
// console.log(!!(3/'owu'));//nan Патикою його, тут false
// console.log((111 > 11 || 45 < 111) ||  !!'0');//t
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//f

//Друге завдання з допів
// let color = prompt("Якого кольору світлофор?")
// switch (color){
//     case "Зелений":
//         console.log('Йди!');
//         break;
//     case "Жовтий":
//         console.log('Чекай');
//         break;
//     case "Червоний":
//         console.log('Стій');
//         break;
//     default:
//         console.log('Роби що хочеш');
// }

//Третє завдання з допів
let color = prompt("Якого кольору світлофор?")
let isRoadClear = window.confirm("Дорога без машин?")
switch (color){
    case "Зелений":
        if(isRoadClear){
            console.log('Йди!');
        } else console.log('Почекай поки проїдуть і йди!');
        break;
    case "Жовтий":
        isRoadClear ? console.log('Всеодно чекай') : console.log('Чекай')
        break;
    case "Червоний":
        isRoadClear ? console.log('Всеодно стій') : console.log('Стій')
        break;
    default:
        console.log('Роби що хочеш');
}