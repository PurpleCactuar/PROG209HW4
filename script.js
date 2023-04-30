/*Javascript*/
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addCalories").addEventListener("click", function () {
        console.log();


        let foodArray = [
	{
		name: 'Banana',
		calories: 105
	},
	{
		name: 'Hot Dog',
		calories: 565
	}
];

const form = document.querySelector('form');
const foodNameInput = document.querySelector('#foodName');
const caloriesInput = document.querySelector('#calories');
const totalCaloriesOutput = document.querySelector('#totalCalories');
const foodListOutput = document.querySelector('#foodList');
