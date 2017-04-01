// cw_pete_the_baker.js
// https://www.codewars.com/trainer/javascript

function cakes(recipe, available) {
	
	var result;					//storing result
	var min;					//number of portions, minimum ingridient
	var temp;					//storing number of portions for specific ingredient
	var switcher = true;		//save number of portions for first ingredient
	var isIngredient;			//if there is no ingredient from recipe in available
	var noIngredient = true;	//if its not possible to prepare by recipe
	
	for (var obj in recipe){
		// debug
		// console.log(obj + "|" + recipe[obj]);
		isIngredient = false;
		
		for (var obj2 in available){
			if (obj == obj2) {
				isIngredient =  true;

				temp = Math.trunc(available[obj2] / recipe[obj]);
				// debug
				// console.log(obj + "|" + obj2 + temp);
				
				if (switcher){
					switcher = false;
					min = temp;
				}

				if (temp < min) min = temp;
			}
		}

		if (! isIngredient) noIngredient = false;
	}

	if (! noIngredient) result = 0
	else result = min;

	console.log("You can prepare (" + result + ") portions");

	return Number(result);
}

// must return 2
// cakes(
// 	{flour: 500, sugar: 200, eggs: 1}, 
// 	{flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 

// must return 0
cakes(
	{apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
	{sugar: 500, flour: 2000, milk: 2000});

