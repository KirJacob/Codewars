/*
	Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
*/
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr){
	
	//find sum of array members
	var arrSum = 0;
	for (var i in arr){
		arrSum = arrSum + arr[ i ];
	}

	//searching for middle of the array
	var tempSum = 0;
	var resultIndex = -1;
	for (var j in arr){		
		if ((j > 0)&&(j < (arr.length - 1))){
			if (tempSum === (arrSum - arr[ j ] - tempSum))
				resultIndex = j;
		}
		tempSum = tempSum + arr[j];
	}
	return Number(resultIndex);
}


var array1 = [1, 2, 3, 4, 3, 2, 1];
var array2 = [1, 100, 50, -51, 1, 1] ;

// console.log(findEvenIndex(array1));
console.log(findEvenIndex(array2));