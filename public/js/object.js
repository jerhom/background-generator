// reference type

var object1 = { value: 10};
var object2 = object1;
var pbject3 = { value: 10};

// context

const object4 = {
	a: function() {
		console.log(this);
	}
}

// instantiation

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi my name is ${this.name}, i'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`WEEEEE i'm a ${this.type}`);
	}
} 

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');