// Step 1: Create a function named calculate that takes two numbers as arguments.
function calculate(num1, num2) {

    // Step 2: Define a callback function named operation inside calculate.
    function operation(num1, num2, callback) {
        // Step 3: Call the callback function with num1 and num2 as arguments.
        return callback(num1, num2);
    }

    // Step 4: The callback function performs an arithmetic operation.
    
    // Addition callback function
    const add = (a, b) => a + b;  // Performs addition and returns the result
    
    // Multiplication callback function
    const multiply = (a, b) => a * b;  // Performs multiplication and returns the result

    // Step 5: Call the operation function twice, once with addition and once with multiplication.

    // Calculate the sum and product using the operation function
    const sum = operation(num1, num2, add);
    const product = operation(num1, num2, multiply);

    // Step 6: Display the results using console.log().
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    console.log(`The product of ${num1} and ${num2} is: ${product}`);
}

// Test the calculate function with different numbers
calculate(5, 10);
calculate(7, 3);
calculate(12, 4);
