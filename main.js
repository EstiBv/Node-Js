"use strick";

const numbers = [];
for (let i = 0; i <= 10; i++) {
  const randomNumber = Math.round(Math.random() * 10);
  numbers.push(randomNumber);
}
console.log("los números aleatorios son: " + numbers);
