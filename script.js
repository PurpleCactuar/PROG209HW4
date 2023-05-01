/* Not working
class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = parseInt(calories);
    }
}

let foodLog = [];

const form = document.querySelector('form');
const foodNameInput = document.querySelector('#foodName');
const caloriesInput = document.querySelector('#calories');
const totalCaloriesOutput = document.querySelector('#totalCalories');
const foodListOutput = document.querySelector('#foodList');

addFoodBtn.addEventListener('click', addFood);

function addFood() {
    const foodName = foodNameInput.value;
    const calories = caloriesInput.value;
    const newFood = new Food(foodName, calories);
    foodLog.push(newFood);
    
    updateFoodLogDisplay();
    updateTotalCaloriesDisplay();
    food
}
*/

/* Working Javascript */

function Food(name, calories) {
  this.name = name;
  this.calories = parseInt(calories);
}

var foodList = [];
var totalCalories = 0;
var form = document.querySelector('form');
var foodNameInput = document.querySelector('#foodName');
var caloriesInput = document.querySelector('#calories');
var foodListDiv = document.querySelector('#foodList');
var totalCaloriesDiv = document.querySelector('#totalCalories');
form.addEventListener('submit', addFood);

function addFood(event) {
  event.preventDefault(); 
  var foodName = foodNameInput.value;
  var calories = caloriesInput.value;
  var food = new Food(foodName, calories);
  foodList.push(food);
  totalCalories += food.calories;
  foodListDiv.textContent = ''; 
    
  for (var i = 0; i < foodList.length; i++) {
    console.log(foodList[i].name + ': ' + foodList[i].calories + ' calories');
    var foodDiv = document.createElement('div');
    foodDiv.textContent = foodList[i].name + ': ' + foodList[i].calories + ' calories';
    foodListDiv.appendChild(foodDiv);
  }
  
  totalCaloriesDiv.textContent = 'Total calories consumed: ' + totalCalories;
  
  foodNameInput.value = '';
  caloriesInput.value = '';
}
