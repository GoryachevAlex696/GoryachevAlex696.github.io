'use strict';

function compare(a, b) {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
}

let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };

let people = [vasya, masha, vova];

for (let element in people)
    console.log(people[element]);
people.sort(compare);

console.log('\n');

for (let element in people)
    console.log(people[element]);