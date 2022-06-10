'use strict';


function showBook() {
    console.log("book:\n");
    console.log("Title: " + this.title + "\n");
    console.log("Price: " + this.price + "\n");
}

let book1 = {

    title: "Как программировать на С | Дейтел Пол, Дейтел Харви",
    pubYear: 2017,
    price: 1024,
    show: showBook

};


let book2 = {
    title: "Теория вероятности",
    pubYear: 1978,
    price: 1000,
    show: showBook
};
book1.show();
console.log("\n");
book2.show();

