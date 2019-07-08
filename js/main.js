var input = document.querySelector(".calc");
var calcTable = document.querySelector(".calc_table");

var memory = {
	arg1: null,
	arg2: null,
	op: null,
	calc: function() {
		switch(this.op) {
			case '+':
				return this.arg1 + this.arg2;
			case '-':
				return this.arg1 - this.arg2;
			case '*':
				return this.arg1 * this.arg2;
			case '/':
				return this.arg1 / this.arg2;
		}
	},
	clear: function() {
		this.arg1 = null;
		this.arg2 = null;
		this.op = null;
	}
}

calcTable.addEventListener("click", function(event){
	if(event.target.dataset.num !== undefined) {
		input.value += event.target.dataset.num;
		return;
	}
	if(event.target.dataset.operation === "C") {
		input.value = "";
		return;
	}
	if(event.target.dataset.operation === ">" ) {
		input.value = input.value.slice(0,input.value.length - 1);
		return;
	}

	if(event.target.dataset.operation !== undefined) {
		var operation = event.target.dataset.operation;

		if(memory.arg1 === null && operation !== "=") {
			memory.arg1 = parseFloat(input.value);
			memory.op = operation;
			input.value = "";
		} else {
			memory.arg2 = parseFloat(input.value);
			if(operation === "=");
			input.value = memory.calc();
			memory.clear();
		}
	}
});