/*Not working
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
*/

/*Working Java*/
// Define the Food constructor
function Food(name, calories) {
  this.name = name;
  this.calories = parseInt(calories);
}

// Initialize the variables and event listener
var foodList = [];
var totalCalories = 0;
var form = document.querySelector('form');
var foodNameInput = document.querySelector('#foodName');
var caloriesInput = document.querySelector('#calories');
var foodListDiv = document.querySelector('#foodList');
var totalCaloriesDiv = document.querySelector('#totalCalories');
form.addEventListener('submit', addFood);

// Define the addFood function
function addFood(event) {
  event.preventDefault(); // Prevent the form from submitting
  var foodName = foodNameInput.value;
  var calories = caloriesInput.value;
  var food = new Food(foodName, calories);
  foodList.push(food);
  totalCalories += food.calories;
  foodListDiv.textContent = ''; // Clear the food list
  // Display the updated food list in the console
  for (var i = 0; i < foodList.length; i++) {
    console.log(foodList[i].name + ': ' + foodList[i].calories + ' calories');
    var foodDiv = document.createElement('div');
    foodDiv.textContent = foodList[i].name + ': ' + foodList[i].calories + ' calories';
    foodListDiv.appendChild(foodDiv);
  }
  // Display the total number of calories consumed
  totalCaloriesDiv.textContent = 'Total calories consumed: ' + totalCalories;
  // Clear the input fields
  foodNameInput.value = '';
  caloriesInput.value = '';
}
