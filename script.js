/*Javascript*/
// Define Food class
class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = parseInt(calories);
    }
}

// Initialize variables
let foodLog = [];

// Get DOM elements
const form = document.querySelector('form');
const foodNameInput = document.querySelector('#foodName');
const caloriesInput = document.querySelector('#calories');
const totalCaloriesOutput = document.querySelector('#totalCalories');
const foodListOutput = document.querySelector('#foodList');

// Define event listeners
addFoodBtn.addEventListener('click', addFood);

// Define event handler functions
function addFood() {
    // Get values from input fields
    const foodName = foodNameInput.value;
    const calories = caloriesInput.value;

    // Create new Food object and add to foodLog array
    const newFood = new Food(foodName, calories);
    foodLog.push(newFood);

    // Update food log display
    updateFoodLogDisplay();

    // Update total calories display
    updateTotalCaloriesDisplay();

    // Reset input fields
    food
}
