let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age, 'Petrov', 'Denis');


class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	makeDiv(text) {
		let box = document.createElement('div');
		document.body.appendChild(box);
		box.textContent = text;
		box.style.cssText = `height: ${this.height}px; 
			width: ${this.width}px; 
			background-color: ${this.bg}; 
			font-size: ${this.fontSize}px; 
			text-align:${this.textAlign}`;
	}
}

let item = new Options(300, 500, 'blue', 24, 'center');

item.makeDiv('НОВЫЙ ТЕКСТ В НОВОМ ЭЛЕМЕНТЕ!');
