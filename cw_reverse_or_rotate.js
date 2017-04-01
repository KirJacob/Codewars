// console.log("cw_reverse_or_rotate.js");
// https://www.codewars.com/trainer/javascript

/*

If a chunk represents an integer 
such as the sum of the cubes of its digits is divisible by 2, 
reverse that chunk; 

Examples:
revrot("123456 987654", 6) --> "234561 876549" rotate
revrot("123456 987653", 6) --> "234561 356789" rotate reverse
revrot("6644 3875", 4) --> "4466 8753" reverse rotate
revrot("66443875", 8) --> "64438756" rotate
revrot("66443876 9", 8) --> "67834466" reverse trunc
revrot("12345677 9", 8) --> "23456771" rotate
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 

revrot("5630 0065 5734 4694 85", 4) --> "0365 0650 7345 6944"

5630 -> 0365 (reverse)
0065 -> 0650 (rotate left)
5734 -> 7345 (rotate left)
4694 -> 6944 (rotate left)
*/

function revrot(str, sz){

	//function to check if line should be reversed
	function reverseOrNot(line){
		var result;
		var strArray = line.split("");
		var numArray = [];
		
		for (var i in strArray)
			numArray.push(parseInt(strArray[i]));

		var sumOfCubes = 0;

		for (var j in numArray)
			sumOfCubes += Math.pow(numArray[j], 3);

		// reverse this chunk if true
		if ((sumOfCubes % 2) == 0) result = true
		else result = false;

		return result;
	}

	//function for rotating line
	function rotateLine(line){
		var resultLine;
		var resultArray = line.split("");
		resultArray.push(resultArray[0]);
		resultArray.splice(0, 1);
		resultLine = resultArray.join("");
		return resultLine;
	}

	// function for reversing line
	function reverseLine(line){
		return line.split("").reverse().join("");
	}


	if ((sz == 0)||(str == "")){
		var result = "";
	}else{
		//getting array of chunks
		var chunksArray = [];
		var curChunk;
		for (var i = 0; i < str.length; i = i + sz){
			curChunk = str.substr(i, sz);
			if (curChunk.length == sz){
				chunksArray.push(curChunk);
			}
		}
		console.log("(" + str + "," + sz + ") => " + chunksArray);

		//processing chunks
		for (var k in chunksArray){
			if (reverseOrNot(chunksArray[k])){
				chunksArray[k] = reverseLine(chunksArray[k]);
			}else{
				chunksArray[k] = rotateLine(chunksArray[k]);
			}
		}
		
		//concat array
		var result = "";
		for (var l in chunksArray){
			result = result + chunksArray[l];
		}
	}
	console.log(result);
	return result;
}