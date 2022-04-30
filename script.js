var button = document.querySelector('.calculate_button');


button.addEventListener('click', function () {
	let n = parseInt((document.querySelector('.input_n')).value);
	let function_vector = Array.from(document.querySelector('.function_vector').value.substring(0, Math.pow(2, n)));

	console.log(function_vector)

	let PZH = document.querySelector('.f_table');
	PZH.innerHTML = '';
	let x_arr = createTable(PZH, n + 1, Math.pow(2, n) + 1, function_vector);





	append_script();

	console.log(document.body);
})


let delete_script_btn = document.querySelector('.delete_script_btn');
let append_script_btn = document.querySelector('.append_script_btn');

append_script_btn.addEventListener('click', append_script);
delete_script_btn.addEventListener('click', delete_script);


function append_script() {
	// let script = document.getElementById('LaTeXscript');
	let script = document.createElement('script');

	script.classList.add('LaTeXscript');
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML';

	document.body.appendChild(script);

	console.log(document.body);
}


function delete_script() {
	let script = document.querySelector('.LaTeXscript');

	script.remove();

	console.log(document.body);
}



function fillBeginWithZero(str, neededLength) {
	let tmp_str = '';

	for (let i = 0; i < neededLength - str.length; i++) {
		tmp_str += '0';
	}

	return (tmp_str + str);
}


function printAray(arr) {
	arr_str = '';

	for (let i = 0; i < arr.length; i++) {
		arr_str += arr[i] + '&nbsp&nbsp';
	}

	return arr_str;
}


function createTable(parent, cols, rows, function_vector) {
	let table = document.createElement('table');

	let x_arr = [];
	let xor_arr = function_vector.slice(0);

	let tr = document.createElement('tr');
	for (let i = 0; i < cols - 1; i++) {
		let td = document.createElement('td');
		td.innerHTML = `\\[x_${i + 1}\\]`;
		tr.appendChild(td);
	}

	let td = document.createElement('td');
	td.innerHTML = `\\[f(\\tilde{x}^{_${cols - 1}})\\]`
	tr.appendChild(td);
	table.appendChild(tr);


	for (let i = 0; i < rows - 1; i++) {
		let tr = document.createElement('tr');

		let str_binary = fillBeginWithZero(i.toString(2), cols - 1);

		for (let j = 0; j < cols - 1; j++) {
			let td = document.createElement('td');
			td.innerHTML = str_binary[j];
			tr.appendChild(td);
		}

		let td = document.createElement('td');
		td.innerHTML = function_vector[i];
		tr.appendChild(td);


		table.appendChild(tr);
	}

	parent.appendChild(table);

	console.log(x_arr);
	return x_arr;


}
