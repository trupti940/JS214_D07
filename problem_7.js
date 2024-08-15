// Step 1: Create an array named numbers with some random integer values.
const numbers = [12, 7, 25, 40, 18, 33, 24, 8];

// Step 2: Create a function named filterArray that takes two arguments: arr (an array) and callback (a callback function).
function filterArray(arr, callback) {
    // Step 3: Inside the filterArray function, iterate over each element of the arr array and call the callback function on each element.
    const filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]); // Call the callback function on each element
        
        // Step 5: Use the returned values from the callback function to create a new array of filtered elements.
        if (result) {
            filteredArr.push(arr[i]);
        }
    }
    
    // Return the filtered array
    return filteredArr;
}

// Step 4: The callback function should check if the current element is even or odd and return true for even elements and false for odd elements.
const isEven = (num) => num % 2 === 0;

// Call filterArray function with numbers array and isEven callback
const filteredNumbers = filterArray(numbers, isEven);

// Step 6: Display the original array and the filtered array using console.log().
console.log("Original array:", numbers);
console.log("Filtered array (only even numbers):", filteredNumbers);
