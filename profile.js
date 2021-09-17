function colorAlert(evt) {
	evt.preventDefault();
	
	alert("Black is my favorite color, because its BOLD and matches with any color");
}


let button = document.querySelector('button#color');

button.addEventListener('click', colorAlert);


function placeAlert(evt) {
	evt.preventDefault();
	alert("My favorite place is where the vibes are good");
}

let button2 = document.querySelector('button#place');

button2.addEventListener('click', placeAlert);

function ritualAlert(evt) {
	evt.preventDefault();
	alert("My favorite ritual is vibing");
}

let button3 = document.querySelector('button#ritual');

button3.addEventListener('click', ritualAlert);