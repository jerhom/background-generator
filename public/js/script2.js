var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired of all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is so cooooooooolll"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++ ) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry you can not login");
	}
}

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password");

signIn(usernamePrompt, passwordPrompt);
