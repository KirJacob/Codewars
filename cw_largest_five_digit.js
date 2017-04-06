<!-- cw_largest_five_digit.js -->
console.log("cw_largest_five_digit.js");

var size = 5;

function solution(digits){
	var max = 0;
	var tempNumber;
	for (var i = 0; i < (digits.length - size + 1); i ++){
		tempNumber = Number(digits.substr(i, size));
		
		if (tempNumber > max)
			max = tempNumber;

	}
	return max;
}

var sample1 = "312343254349";
solution(sample1);