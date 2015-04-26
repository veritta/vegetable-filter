function main() {
	return buttStuff();
}

function multiply(a, b) {
	return a * b;
}

function divide(a,b) {
	return a / b;
}

function divideByTwo() {
	var output = multiply(121, 56);
	while(output > 10) {
		console.log(output);
		output = divide(output, 2);
	}
	return output;
}

function buttStuff() {
	var oxfordComma = true;
	var output;
	var vegetables = ["eggplant", "carrot", "celery", "asparagus", "zucchini", "onion", "pumpkin", "lettuce", "spinach", "okra", "corn"];
	var filteredVegs = [];

//VEG LENGTH, SORTING INTO FILTEREDVEGS
	var i = 0;
	while (i < vegetables.length) {
		var currentVeg = vegetables[i];
		if (currentVeg.length < 7) {
			filteredVegs.push(currentVeg);
		}
		i++;
	}

//SENTENCE FORM
	if (filteredVegs.length == 0) {
		return "There are no chosen vegetables.";
	} else if (filteredVegs.length == 1) {
		output = "The chosen vegetable is";
	} else {
		output = "The chosen vegetables are";
	}

//VEGETABLE INSERTION, 'AND', COMMAS
	i = 0;
	while (i < filteredVegs.length) {
		
		if (i == filteredVegs.length - 1) {
			output += " and";
		}
	
		output += " " + filteredVegs[i];

// COMMAS
		if (filteredVegs.length >= 3) {
			if (i < filteredVegs.length - 2) {
				output += ",";
			}

			if (i == filteredVegs.length - 2 && oxfordComma) {
				output += ",";
			}
		}


		i++;
	}
	output += ".";

	return output;
}