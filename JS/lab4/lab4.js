'use strict';

		let book1 = {};

		book1.title = "Как программировать на С | Дейтел Пол, Дейтел Харви";
		book1.pubYear = 2017;
		book1.price = 1024;

		let book2 = {
			title: "Теория вероятности",
			pubYear: 1978,
			price: 1000
		};

		console.log("book1:\n");
		for (let element in book1)
			console.log(element + ": " + book1[element]);

		console.log("\n");

		console.log("book2:\n");
		for (let element in book2)
			console.log(element + ": " + book2[element]);



