// // //- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// let hideButton = document.getElementById('hideButton');
// hideButton.onclick = () => {
//     let text = document.getElementById('text');
//     text.hidden = true;
// }

// // //Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// let hideSelf = document.getElementById('hideSelf');
// hideSelf.onclick = () => {
//     hideSelf.hidden = true;
// }

// // //- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // //     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let button = document.getElementById('confirm');
// button.onclick = () => {
//     let inputAge = document.getElementById('inputAge');
//     if(+inputAge.value < 18) alert('You are under 18')
// }

// //- Створіть меню, яке розгортається/згортається при клику
// let menu = document.getElementById('menu')
// menu.onclick = () => {
//     let menuItems = document.getElementsByClassName('menuItem')
//     let isHidden = menuItems[0].hidden;
//     for (const menuItem of menuItems) {
//         menuItem.hidden = !isHidden;
//     }
// }

// // - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вивести список коментарів в документ, кожний в своєму блоці.
// //     Додайте кожному коментарю по кнопці для згортання його body.
//
// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem1', body:'lorem ipsum 1'},
//     {title : 'lorem2', body:'lorem ipsum 2'}
// ]
// for (const comment of comments) {
//     const commentDiv = document.createElement('div');
//     commentDiv.setAttribute('id', `${comment.title}`);
//     commentDiv.innerHTML = `${comment.title}<br>
//     ${comment.body}
//     <button class="hideComment" name=${comment.title}>Hide</button><hr>`
//     document.body.appendChild(commentDiv);
// }
//
// let hideCommentButtons = document.getElementsByClassName('hideComment')
// for (const hideCommentButton of hideCommentButtons) {
//     console.log(hideCommentButton.name)
//     hideCommentButton.onclick = () => {
//         let div = document.getElementById(hideCommentButton.name)
//         div.hidden = true
//     }
// }

// // - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let inputButton = document.getElementById('inputButton');
//
// inputButton.onclick = () => {
//     let inputForm = document.forms.myForm1;
//     console.log(inputForm.someText1.value);
//     console.log(inputForm.someText2.value);
//
//     inputForm = document.forms.myForm2;
//     console.log(inputForm.someText3.value);
//     console.log(inputForm.someText4.value);
// }

// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кількість ячейок в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// function createTable(row, column, element){
//     let docElement = document.getElementById(`${element}`);
//     let table = document.createElement('table');
//     table.style.width = '100px';
//
//     for(let i = 0; i < row; i++){
//         let tr = table.insertRow(i);
//         for(let j = 0; j < column; j++){
//             let td = tr.insertCell(j);
//             td.innerText = `R${i+1}C${j+1}`
//             td.style.border = '1px solid black';
//         }
//     }
//     docElement.appendChild(table);
//     document.body.appendChild(docElement);
// }
//
// createTable(4, 4, 'table1')

// // - Сворити масив нецензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
//
// let badWords = ['nigger', 'pidaras']
//
// let form = document.forms.formName;
// const checkButton = form.checkBtn;
//
// checkButton.onclick = (ev) => {
//     ev.preventDefault();
//     for(let i=0; i < badWords.length; i++){
//         if(badWords[i] == form.name.value) alert('ASU');
//     }
// }

// //- Сворити масив нецензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
//
// let badWords = ['nigger', 'pidaras']
//
// let form = document.forms.formName;
// const checkButton = form.checkBtn;
//
// checkButton.onclick = (ev) => {
//     ev.preventDefault();
//     for(let i=0; i < badWords.length; i++){
//         if(form.name.value.includes(badWords[i])) alert('ASU');
//     }
// }

// //-- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// // Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// // 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// // 2й - залишає старших 29 років включно
// // 3й - залишає тих в кого місто Київ
// // Дані виводить в документ
// function showUsers(users) {
//     let a='';
//     for (const user of users) {
//         const usersDiv = document.createElement('div');
//         usersDiv.setAttribute('id', `${user.id}`);
//         usersDiv.setAttribute('class', `user`);
//         for (const userKey in user) {
//             if(userKey !== 'address'){
//                 a = a + `${userKey}: ${user[userKey]}<br>`
//                 usersDiv.setAttribute(userKey, user[userKey])
//             }
//             else {
//                 a = a + `address: ${user[`${userKey}`].city}<br>`
//                 usersDiv.setAttribute('address', user[`${userKey}`].city)
//             }
//         }
//         usersDiv.innerHTML = a + `<hr>`;
//         document.body.appendChild(usersDiv);
//         a='';
//     }
// }
//
//
// let newArrayOfUsers = [];
// showUsers(usersWithAddress);
//
// let checkBoxForm = document.forms.checkBoxForm;
//
// let check = checkBoxForm.check1;
// check.onchange = () => {
//     let userDivs = document.getElementsByClassName('user')
//     if(check.checked){
//         for (const userDiv of userDivs) {
//             if(userDiv.getAttribute("isMarried") == "true") {
//                 userDiv.hidden = true
//             }
//     }
//     }else{
//         for (const userDiv of userDivs) {
//             if(userDiv.getAttribute("isMarried") == "true") {
//                 userDiv.hidden = false
//             }
//         }
//     }
// }
//
// let check2 = checkBoxForm.check2;
// check2.onchange = () => {
//     let userDivs = document.getElementsByClassName('user')
//     if(check2.checked){
//         for (const userDiv of userDivs) {
//             if(+userDiv.getAttribute("age") < 29) {
//                 userDiv.hidden = true
//             }
//         }
//     }else{
//         for (const userDiv of userDivs) {
//             if(+userDiv.getAttribute("age") < 29) {
//                 userDiv.hidden = false
//             }
//         }
//     }
// }
//
// let check3 = checkBoxForm.check3;
// check3.onchange = () => {
//     let userDivs = document.getElementsByClassName('user')
//     if(check3.checked){
//         for (const userDiv of userDivs) {
//             if(userDiv.getAttribute("address") !== 'Kyiv') {
//                 userDiv.hidden = true
//             }
//         }
//     }else{
//         for (const userDiv of userDivs) {
//             if(userDiv.getAttribute("address") !== 'Kyiv') {
//                 userDiv.hidden = false
//             }
//         }
//     }
// }



//- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

//-- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті