// cw_list_squared.js
/*
Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. 
These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) 
we want to find all integers between m and n whose sum of squared divisors is itself a square. 
42 is such a number.
The result will be an array of arrays(in C an array of Pair), 
each subarray having two elements, 
first the number whose squared divisors is a square and then the sum of the squared divisors.

Examples:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
*/

function listSquared(m, n) {
	function divisors(number){
		var resultArr = [];
		for (var i = 1; i <= number; i ++){
			if ((number % i) == 0) resultArr.push(i);
		}
		// console.log(resultArr);
		return resultArr;
	}

	function checkSquared(number){
		function getSum(total, sum){
			return total + sum * sum;
		}
		var tempArr = divisors(number);
		var sumSqr = tempArr.reduce(getSum);
		var result;

		// debug
		// console.log(sumSqr + "|" +Math.sqrt(sumSqr));
		
		if (Math.sqrt(sumSqr) % 1 == 0) result = true;
		else result = false;

		var objResult = {};
		objResult.sum = sumSqr;
		objResult.num = number;
		objResult.res = result;

		return objResult
	}

	var finalRes = [];
	for (var i = m; i <= n; i++){
		if(checkSquared(i).res){
			finalRes.push([checkSquared(i).num, checkSquared(i).sum]);
		}
	}
	console.log(finalRes.length + "|" + finalRes[0] + "|" + finalRes[1]);
	console.log(finalRes);
	return finalRes;
}
listSquared(42,250);



