const souvenirWeight = 75;
const trinketWeight = 112;
let souvenirNum = Number (prompt("Сколько сувениров?"));
let trinketNum = Number (prompt("Сколько безделушек?"));
const sumWeight = ((souvenirWeight *souvenirNum) + (trinketWeight * trinketNum)) / 1000;

document.write(`Общий вес: ${sumWeight} кг <br>`);
