// cw_pick_peacks.js
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

function pickPeaks(arr){
	var resultObj = {};
	resultObj.pos = [];
	resultObj.peaks = [];
	var counter = 0;

	console.log("array = " + arr);

	for (var i = 0; i < arr.length; i ++){
		if ((i!=0)&&(i!=(arr.length-1))){
			
			console.log(i + "|" + arr[i] + "|" + arr[i+1] + "|" + (arr[i]>arr[i-1]) + "|" + (arr[i]>arr[i+1]));

			if ((arr[i]>arr[i-1])&&(arr[i]>arr[i+1])){
				resultObj.pos[counter] = i;
				resultObj.peaks[counter] = arr[i];
				counter ++;
				console.log("i=" + i +"| arr[i]= "+ arr[i]);				
			}

			if ((arr[i]>arr[i-1])&&(arr[i]==arr[i+1])&&(arr[i]!=(arr[arr.length-1]))){
				resultObj.pos[counter] = i;
				resultObj.peaks[counter] = arr[i];
				counter ++;
				console.log("i=" + i +"| arr[i]= "+ arr[i]);				
			}
		}
	}
	console.log(resultObj.pos + "|" + resultObj.peaks);
	return resultObj;
	// return {pos:[], peaks:[]}
}

pickPeaks([1,2,8,2,1,2,3,4,4,5,2]);