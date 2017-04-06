<!-- cw_primes_in_numbers.js -->

console.log("cw_primes_in_numbers.js");

function primeFactors(n){
	var divisor = 2;
	var currentNumber = n;
	var resultArr = [ ];
	var resultArr2 = [ ];
	var degree = 0;
	
	while (currentNumber != 1){
		if ((currentNumber % divisor) == 0){
			resultArr.push(divisor);
			currentNumber = currentNumber / divisor;
			degree ++ ;
			console.log("cnum=" + currentNumber + "| div=" + divisor + 
				"|degree=" + degree);
		}else{
			if (degree != 0){
				resultArr2.push({num:divisor, deg:degree});
				degree = 0;
			}
			divisor ++ ;
		}
	}
	resultArr2.push({num:divisor, deg:degree});
	console.log(resultArr);
	console.log(resultArr2);
	var stringRes = "";
	for (var i in resultArr2){
		console.log(resultArr2[i].num + "|" + resultArr2[i].deg);
		if (resultArr2[i].deg > 1)
			stringRes = stringRes + "(" + resultArr2[i].num + "**" + resultArr2[i].deg + ")";
		else
			stringRes = stringRes + "(" + resultArr2[i].num + ")";
	}
	console.log(stringRes);
	return stringRes;
}
// n = 86240 should return "(2**5)(5)(7**2)(11)"
primeFactors(86240);