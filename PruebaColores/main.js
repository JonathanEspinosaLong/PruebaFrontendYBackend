function changeColor(id) {
	const btn = document.getElementById(id);
	let color = btn.getAttribute('data-color');
	btn.classList.toggle('button-' + color);

	if (color == 'red') color = 'green';
	else if (color == 'green') color = 'blue';
	else color = 'red';

	btn.innerHTML = color.toUpperCase();
	btn.classList.toggle('button-' + color);
	btn.setAttribute('data-color', color);
}
