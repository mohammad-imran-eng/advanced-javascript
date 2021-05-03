const students = [
    { id: 1, name: "Delowar Hossain Sayde" },
    { id: 2, name: "Mamunul Haque" },
    { id: 3, name: "Mizanur Rahman" }
]

const newArry = []
for (let i = 0; i < students.length; i++) {
    const newValue = students[i].name;
    newArry.push(newValue);
}

newArry.map((elements) => {
    console.log(elements);
})

newArry.map((elements, index) => {
    console.log(index);
})

newArry.map((elements, index, arr) => {
    console.log(arr);
})



