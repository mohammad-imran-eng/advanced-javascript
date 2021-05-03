
const numbers = [3, 4, 5];

numbers.map(function (elements) {
    console.log(elements);
});


const result = numbers.map(function (elements) {
    return elements * elements;
});

console.log(result);

const bigger = numbers.filter(x => x > 3);

const isThere = numbers.find(x => x > 2)

console.log(bigger);
console.log(isThere);



