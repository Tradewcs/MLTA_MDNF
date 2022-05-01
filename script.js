var button = document.querySelector('.calculate_button');


button.addEventListener('click', function () {
	let n = parseInt((document.querySelector('.input_n')).value);
	let function_vector = Array.from(document.querySelector('.function_vector').value.substring(0, Math.pow(2, n)));

	// console.log(function_vector)

	let PZH = document.querySelector('.f_table');
	PZH.innerHTML = '';
	let x_arr = createTable(PZH, n + 1, Math.pow(2, n) + 1, function_vector);





	// append_script();

	// console.log(document.body);
})


let delete_script_btn = document.querySelector('.delete_script_btn');
let append_script_btn = document.querySelector('.append_script_btn');
let log_body_btn = document.querySelector('.log_body_btn');

log_body_btn.addEventListener('click', function() {console.log(document.body);});
append_script_btn.addEventListener('click', append_script);
delete_script_btn.addEventListener('click', delete_script);


function append_script() {
	// let script = document.getElementById('LaTeXscript');
	let script = document.createElement('script');

	script.classList.add('LaTeXscript');
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML';

	document.body.appendChild(script);

	MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'unique-id']);
}


function delete_script() {
	let script = document.querySelector('.LaTeXscript');

	console.log(script);

	script.remove();
}


let id = 0;
function insertLaTeX(parent, LaTeX) {
	var newP = document.createElement("p");
	newP.id = `#${id}`;
	newP.innerHTML = `\\(${LaTeX}\\)`;

	parent.appendChild(newP);

	MathJax.Hub.Queue(['Typeset', MathJax.Hub, `id - ${id}`]);
	id++;
}



function Combination(n, k) {
	var res = 1;

	for (let i = n - k + 1; i <= n; i++) {
		res *= i;
	}

	for (let i = 2; i <= k; i++) {
		res /= i;
	}

	return res;
}


function factorial(n) {
	fct = 1;
	for (let i = 1; i <= n; i++) {
		return
	}
}


function buildElementaryConjunction(varCount, num_x_arr) {
	let result ='';
	
	for (let i = 0; i < num_x_arr.length; i++) {
		result += `x${num_x_arr[i]} `;
	}

	return result;
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

	
	parent.id = 'truth-table'
	parent.appendChild(table);

	MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'truth-table']);


	// console.log(x_arr);
	return x_arr;


}





		// function printGlobalDNF(varCount) {
		// 	let result = '\\[';
		
		// 	for (let x_count = 1; x_count <= varCount; x_count++) {
		// 		for (let j = 0; j < Combination(x_count, varCount); j++) {
		// 			for (let k = 0; k < Math.pow(2, x_count); k++) {
		// 			}
		// 		}
		// 	}
		// }
		
