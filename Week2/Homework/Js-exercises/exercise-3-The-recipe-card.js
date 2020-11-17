let myMealRecipe = {
Breakfast : 'French Toast',
Serves : 1,
Ingredients: [ '1 eggs', '1 cup milk' , '2 slids toast']
}

for (let key in myMealRecipe) {
    console.log(key, myMealRecipe[key]);
  }