"use strict";
console.log("Hello from app");
let fname = "Suraphop";
//fname = 10;
//fname = true;
fname = "bunsawat";
let age = 30;
//age = "twenty"
let isWorking = false;
console.log(`ชื่อ = ${fname.toUpperCase()}`);
console.log(`ชื่อ = ${fname.toLocaleLowerCase()}`);
//ชนิดข้อมูลปเ็น any (ไม่ควรใช้งานเลี่ยงไปเป็น unknown)
let myVar = "Suraphop";
myVar = 10;
myVar = true;
console.log(`myVar = ${myVar}`);
//unknown
let myVarUnknown = 2; //"2"
// myVarUnknown="suraphop"
// myVarUnknown.toUpperCase()
if (typeof myVarUnknown === "string") {
    console.log(`${myVarUnknown} is a string`);
    console.log(`${myVarUnknown.toUpperCase()} is a string`);
}
else {
    console.log(`${myVarUnknown} is not a string`);
}
//function
function formatNumber(num) {
    return num.toFixed(2);
}
let amount = 50.23423442;
console.log(formatNumber(amount));
//Type assertions
let username;
username = "suraphop";
//username.toUpperCase()
console.log(username.toUpperCase());
console.log(username.toUpperCase());
//condition test
//if else
let sum = 40;
let result;
if (sum % 2 == 0) {
    result = "เลขคู่";
}
else {
    result = "เลขคี่";
}
console.log(`ผลลัพธ์ = ${result}`);
result = (sum % 2 == 0) ? "เลขคู่" : "เลขคี่";
console.log(`ผลลัพธ์ = ${result}`);
//switch case
let service = 4;
let result_2;
switch (service) {
    case 1:
        result_2 = "สอบถามยอดเงินคงเหลือในบัญชี";
        break;
    case 2:
        result_2 = "ฝากเงิน";
        break;
    case 3:
        result_2 = "ถอนเงิน";
        break;
    default:
        result_2 = "หมายเลขบริการไม่ถูกต้อง";
        break;
}
console.log(`ผลลัพธ์ = ${result_2}`);
//for
for (let count = 1; count <= 10; count++) {
    console.log(count);
}
let users = ["suraphop", "bunsawat", "phop"];
// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }
users.forEach((user) => {
    console.log(user);
});
//function
function sayHi() {
    console.log("Hello typeScript");
}
sayHi();
//input keyword argument
function sayHiString(name) {
    console.log(`HELLO ${name.toUpperCase()}`);
}
sayHiString("suraphop");
//return
function getDiscount() {
    return 500;
}
console.log(`discount ${getDiscount()}`);
function getAddress() {
    return "Lopburi";
}
console.log(`addfress ${getAddress()}`);
//function input return
function checkNumber(num) {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
}
console.log(checkNumber(3));
//arrow function
const checkNumberArrow = (num) => {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
};
const total = (a, b) => {
    return a + b;
};
console.log(`total ${total(3, 2)}`);
//default values
const showEmployee = (name, age, address = "bangkok") => {
    return `ชื่อ: ${name} , อายุ: ${age} , ที่อยู่: ${address}`;
};
console.log(showEmployee("Suraphop", 20, "LOPBURI"));
console.log(showEmployee("Suraphop", 20));
//object
let person = {
    name: "Suraphop",
    age: 20,
};
let position = {
    lat: 3.44,
    long: 43.3
};
//object in void function
const showDetail = (data) => {
    console.log(`name: ${data.name} , age: ${data.age}`);
};
//showDetail("Suraphop",3)
showDetail(person);
//fucntion return object
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random()
    };
};
console.log(randomPosition());
let emp1 = {
    id: 1,
    name: "Suraphop",
    salary: 3333,
    phone: "23f",
};
emp1.name = "Suraphop2";
emp1.salary = 234234;
console.log(emp1);
let emp2 = {
    id: 2,
    name: "Suraphop2",
    salary: 33332,
};
emp2.name = "adasd";
emp2.salary = 654564;
console.log(emp2);
//array =
const usersArray = [];
usersArray.push("suraphop");
usersArray.push("bunsawat");
//usersArray.push(100)
console.log(usersArray);
console.log(usersArray[0]);
usersArray[0] = "suraphop_2";
console.log(usersArray[0]);
console.log(usersArray.length);
usersArray.forEach(user => {
    console.log(user);
});
const employees = [];
employees.push({ name: "Suraphop", salary: 234 });
employees.push({ name: "Suraphop2", salary: 334 });
employees.push({ name: "Suraphop3", salary: 323 });
//console.log(employees)
employees.forEach(user => {
    console.log(user);
});
//destructuring
const colors = ["red", "blue"];
const [red, blue] = colors;
console.log(red);
console.log(blue);
//object
const personObject = {
    nameObject: 'suraphop',
    ageObject: 30,
    address: "lopburi"
};
const { nameObject, ageObject, address } = personObject;
console.log(nameObject);
//tuple
const point = [10, 20];
const goodStatus = [200, "OK"];
//console.log(goodStatus)
const goodStatus2 = [200, "OK"];
console.log(goodStatus2);
const goodStatus3 = [200, "OK"];
