class recipeCard {
    constructor(title, servings, ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients; 
    }
    printRecipeCard = function () {
        console.log(`${this.title}\nServes: ${this.servings}\nIngredients:`);
        for (let key in this.ingredients) {
            console.log(`-${this.ingredients[key]}`);
        }   
    }
}
const guacamole = new recipeCard('Guacamole', 4, ['3 avacados', '1 lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper']);
guacamole.printRecipeCard();