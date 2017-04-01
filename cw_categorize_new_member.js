// cw_categorize_new_member.js

/*
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
["Open", "Open", "Senior", "Open", "Open", "Senior"]
greater or equalto 55
handicap greater than 7
*/

function openOrSenior(data){
	var result = [];
	var age, handicap;

	for (var i in data){
		age = data[i][0];
		handicap = data[i][1]

		if ((age >= 55)&&(handicap > 7)) 
			result.push("Senior")
		else result.push("Open");
	}

	return result;
}

var array1 = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
openOrSenior(array1);