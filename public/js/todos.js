var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

var todosImportant = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];

// for (i = 0; i < todos.length; i++) {
// 	todos[i] = todos[i] + "!";
// }

// var todosLength = todos.length;

// for (i = 0; i < todosLength; i++) {
// 	todos.pop();
// }

// var counterOne = 0;
// while(counterOne < 10) {
// 	console.log(counterOne);
// 	counterOne++;
// }
// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while(counterTwo > 0);

// todos.forEach(function(todo, i) {
// 	console.log(todo, i + "!");
// })

function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

