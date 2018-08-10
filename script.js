function result() {

	let n1, n2, res, sel;

	n1 = parseFloat(document.getElementById('n1').value);

	n2 = parseFloat(document.getElementById('n2').value);

	if (isNaN(n1) || isNaN(n2)) {
	  alert('Введите число!');
	  return;
	}

	sel = document.getElementById('sel').value;

	switch (sel) {
	  case '+':
	    res = n1 + n2;
	    break;
	  case '-':
	    res = n1 - n2;
	    break;
	  case '*':
	    res = n1 * n2;
	    break;
	  case '/':
	    if (n2 === 0) {
		alert('Делить на 0 нельзя!');
		return;
	    }		
	    res = n1 / n2;
	    break;
	}

	document.getElementById('res').innerHTML = res;

}

function cleaner() {

	document.getElementById('n1').value = '';

	document.getElementById('n2').value = '';

	document.getElementById('res').innerHTML = '';

}