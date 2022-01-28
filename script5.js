const a = +prompt("Пишите число a");
const b = +prompt("Теперь число  b");

const sum = a + b;
const subtraction = a - b;
const multiple = a * b;
const division = a / b;
const remain = a % b;
const power = Math.pow(a, b);

document.write(`a + b ответ: ${sum} <br>`);
document.write(`a - b ответ: ${subtraction} <br>`);
document.write(`a * b ответ: ${ multiple} <br>`);
document.write(`a / b ответ: ${division} <br>`);
document.write(`Oстаток от деления a на b: ${remain} <br>`);
document.write(`Результат возведения числа a в степень b: ${power}`);
