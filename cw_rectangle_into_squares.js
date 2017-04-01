// rectangle_into_squares.js
// https://www.codewars.com/kata/rectangle-into-squares/train/javascript
// console.log("rectangle_into_squares.js");

/*
(3,5) -> 3 + (3*2)
(3*2) -> 2 + (1*2)
(1*2) -> 1 + 1
(3,5) -> (3, 2, 1, 1)

Test.assertSimilar(sqInRect(5, 5), null)
Test.assertSimilar(sqInRect(5, 3), [3, 2, 1, 1])
Test.assertSimilar(sqInRect(3, 5), [3, 2, 1, 1])
Test.assertSimilar(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
*/

function sqInRect(lng, wdth){
	var result = 0;
	var sqResult = [];
	var curLng = lng;
	var curWdth = wdth;
	var buffer;

	if (curLng == curWdth){
		result = null;
	}

	while (true){
		if (curLng < curWdth){
			buffer = curLng;
			curLng = curWdth;
			curWdth = buffer;
		}

		if (curLng == curWdth){
			sqResult.push(curLng);
			break;break;
		}
			
		curLng = curLng - curWdth;
		sqResult.push(curWdth);
	}

	if (result == null) return result
	else return sqResult;
}