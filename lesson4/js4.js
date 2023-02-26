// //Реалізовуємо свій компютерний магазин.
// // ===
// // Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// // Оперативна память.
// // Потужність процесора. (цифра від 0 до 1000)
// // Назва.
// // В кожного компютера має бути метод включання.
// class Computer{
//     constructor(memory, power, name) {
//         this.memory = memory;
//         this.power = power;
//         this.name = name;
//     }
//
//     on(){
//         console.log(`Computer ${this.name} is on`);
//     }
// }
//
// //Від базового компютрера треба реалізувати ноутбук.
// // Він має нову властивість дюймаж монітора.
// //
// // У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// class Laptop extends Computer{
//     constructor(memory, power, name, monitorSize) {
//         super(memory, power, name);
//         this.monitorSize = monitorSize;
//         this.battery = power / (monitorSize * memory)
//     }
// }
//
// //Від ноутбука потрібно зробити ультрабук.
// // Він має нову змінну ваги.
// // При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// class Ultrabook extends Laptop{
//     constructor(memory, power, name, monitorSize, veight) {
//         super(memory, power, name, monitorSize);
//         this.veight = veight;
//     }
//
//     on(){
//         this.veight > 2 && this.battery < 4 ? console.log('Error!') : console.log(`Computer ${this.name} is on`);
//     }
// }
//
// //Від базвого класу потрібно створити базовий ПК.
// // В нього має бути новий метод запуску ігор.
// // Кількість FPS визначається як потужність / опервтивку.
// // Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// //Компютер можна апгрейдити.
// // Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// // Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// // Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// class Pc extends Computer{
//     constructor(memory, power, name) {
//         super(memory, power, name);
//     }
//
//     runGame(gameName){
//         console.log(`You are playing ${gameName} with ${this.power / this.memory} FSP`)
//     }
//
//     apgradePower(rateOfApgrade){
//         if(rateOfApgrade > 10) console.log('Rate is too big. Less than 10% is allowed')
//         else {
//             this.power = this.power + (this.power/100 * rateOfApgrade);
//             console.log(`Power is apgraded! New power: ${this.power}`)
//         }
//     }
//
//     apgradeMemmory(){
//         this.memory = this.memory * 2;
//         console.log(`Memory is apgraded! New memory: ${this.memory}`)
//     }
// }
//
// //Від базового ПК необхідно зробити ігровий ПК.
// // Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// // При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// // що на цьому відрі ігри не запускаються.
// class GamePc extends Pc{
//     constructor(memory, power, name) {
//         super(memory, power, name);
//     }
//
//     runGame(gameName){
//         if(this.power < 500 && this.memory < 8) console.log('This Pc is bad')
//         else{
//             this.power = this.power * 0.99
//             console.log(`You are playing ${gameName} with ${this.power / this.memory * 2} FSP`)
//         }
//
//     }
// }
//
// const a = new GamePc(8, 500, 'Lenovo');
// a.runGame('Overwatch');
// a.apgradeMemmory();
// a.apgradePower(4);

// //- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car{
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`)
//     }
//
//     info(){
//         console.log(`Модель: ${this.model}\nВиробник: ${this.producer}\nРік випуску: ${this.year}\nМаксимальна швидкість: ${this.maxSpeed}\nОб'єм двигуна: ${this.engineCapacity}`)
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue){
//         this.year = newValue;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//         console.log(this.driver)
//     }
// }
//
// const car = new Car('Rav4', 'Toyota', 2004, 160, 4);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// console.log(car.maxSpeed);
//
// const newDriver = {
//     name: 'Aleh',
//     year: 23
// }
// car.addDriver(newDriver)

// //-створити класс попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Cinderella{
//     constructor(name, year, footSize) {
//         this.name = name;
//         this.year = year;
//         this.footSize = footSize;
//     }
// }
//
// class Prince{
//     constructor(name, year, shoeSize) {
//         this.name = name;
//         this.year = year;
//         this.shoeSize = shoeSize;
//     }
// }
//
// const Cinderella1 = new Cinderella('Cinderella1', 14.1, 28);
// const Cinderella2 = new Cinderella('Cinderella2', 15, 23);
// const Cinderella3 = new Cinderella('Cinderella3', 16, 31);
// const Cinderella4 = new Cinderella('Cinderella4', 18, 33);
// const Cinderella5 = new Cinderella('Cinderella5', 33, 27);
// const Cinderella6 = new Cinderella('Cinderella6', 22, 44);
// const Cinderella7 = new Cinderella('Cinderella7', 11, 25);
// const Cinderella8 = new Cinderella('Cinderella8', 19, 29);
// const Cinderella9 = new Cinderella('Cinderella9', 24, 24);
// const Cinderella10 = new Cinderella('Cinderella10', 22, 34);
//
// let cindrellas = [Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9];
// cindrellas.push(Cinderella10)
//
// const prince = new Prince('Tristan', 21, 33)
// for (const cindrella of cindrellas) {
//     if(prince.shoeSize === cindrella.footSize) console.log(`${cindrella.name} must be with ${prince.name}`)
// }

// //-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// let car = {
//     model: 'Rav4',
//     producer: 'Toyota',
//     year: 2004,
//     maxSpeed: 160,
//     engineCapacity: 4,
//
//     drive: () => {
//         console.log(`Їдемо зі швидкістю ${car.maxSpeed} кілометрів на годину`)
//     },
//
//     info: () => {
//         //console.log(`Модель: ${car.model}\nВиробник: ${car.producer}\nРік випуску: ${car.year}\nМаксимальна швидкість: ${car.maxSpeed}\nОб'єм двигуна: ${car.engineCapacity}`)
//         console.log('Car information:\n')
//         for (const carKey  in car) {
//             if(carKey != "drive" && carKey != "info" && carKey != "increaseMaxSpeed" && carKey != "changeYear" && carKey != "addDriver") console.log(`${carKey}: `, car[carKey])
//         }
//     },
//
//     increaseMaxSpeed: (newSpeed) => {
//         car.maxSpeed += newSpeed;
//     },
//
//     changeYear: (newValue) => {
//         car.year = newValue;
//     },
//
//     addDriver: (newDriver) => {
//         car.driver = newDriver;
//     }
//
// }
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2008)
//
// const newDriver = {
//     name: 'Aleh',
//     year: 23
// }
// car.addDriver(newDriver)
// console.log("----------------")
// car.info();