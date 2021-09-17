console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted");
}


let form = document.querySelector('img#kitty');

form.addEventListener('mouseover', handleSubmit);