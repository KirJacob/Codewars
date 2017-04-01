// console.log("take_ten_minute_walk.js");
// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript
//some test cases for you...
// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

function isValidWalk(walk) {
	var result = false;
	var direction;
	var posX = 0, posY = 0;
	for (var directionIndex in walk){
		direction = walk[directionIndex];
		switch(direction){
			case 'n':{
				posY = posY - 1;
				break;
			}
			case 's':{
				posY = posY + 1;
				break;
			}
			case 'e':{
				posX = posX + 1;
				break;
			}
			case 'w':{
				posX = posX - 1;
				break;
			}
			default:
				break;
		}
	}
	if ((posX == 0)&&(posY == 0))
		result = true;

	if (walk.length != 10)
		result = false;

	console.log(walk + " | length="+walk.length + "(" + posX + ","+ posY +")");
  	console.log(result);
  	console.log(walk.length != 10);
	
	return result;
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s']);



