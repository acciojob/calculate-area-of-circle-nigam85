//  function calculateArea() {
	 
//             // Get the radius from the user using the prompt() function
//             let radius = prompt("Enter the radius of the circle:");
//             // write you code here and display the result to the user
	 
           
// }
// calculateArea();
// Prompt the user for the radius
const radius = parseFloat(prompt("Enter the radius of the circle:"));

// Check if the input is a positive number
if (isNaN(radius) || radius <= 0) {
  alert("Please enter a valid positive number for the radius.");
} else {
  // Calculate the area of the circle
  const area = Math.PI * Math.pow(radius, 2);

  // Round the result to two decimal places
  const roundedArea = area.toFixed(2);

  // Display the result
  alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
}

