'use strict';
function showBook(){
    console.log("book:\n");
    console.log("Title: " + this.title + "\n");
    console.log("Price: " + this.price + "\n");
}

function isEmpty(obj){
    return !Object.keys(obj).length;
}

let book1 = {
    title: "Теория вероятности 2",
    pubYear: 2010,
    price: 1200,
    show: showBook
};
console.log("Пустая книга имеет значение : " + isEmpty(book1) + "\n");

book1 = {};
console.log("Пустая книга имеет значение : " + isEmpty(book1) + "\n");

let book2 = {
    title: "Физика",
    pubYear: 2019,
    price: 200,
    show: showBook
};
console.log("Пустая книга имеет значение : " + isEmpty(book2) + "\n");

book2 = {};

console.log("Пустая книга имеет значение : " + isEmpty(book2) + "\n");

