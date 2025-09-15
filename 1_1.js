// #1
const secH = 60 * 60;
const secD = secH * 24;
const secM = secD * 30; 

// #2
const isAdult = confirm("Ви повнолітній?");

// #3
const login = prompt("Введіть ваш логін:");
const email = prompt("Введіть ваш email:");
const password = prompt("Введіть ваш пароль:");
alert(`Шановний ${login}, ваш email — ${email}, ваш пароль — ${password}`);

// #4
alert("Dariia");

// #5
const dataTypes = {
  "String": "some string",
  "Number": 123,
  "Boolean": true,
  "Undefined": undefined,
  "Null": null,
  "Big_Int": 1234567890123456789012345678901234567890n
};