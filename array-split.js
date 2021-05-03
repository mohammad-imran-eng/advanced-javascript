const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const part = numbers.slice(1, 5);
console.log(part);
console.log(numbers);

const removed = numbers.splice(2, 2, 77, 77);
console.log(removed);
console.log(numbers);


const together = numbers.join(" Orpi ");

console.log(together);

