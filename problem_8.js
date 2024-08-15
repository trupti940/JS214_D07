// Step 1: Create a function named getUserData that takes two arguments: id (user ID) and callback (a callback function).
function getUserData(id, callback) {
    // Step 2: Simulate an asynchronous API request using setTimeout.
    setTimeout(() => {
        // Step 3: After a delay of 2 seconds, call the callback function and pass a dummy user object.
        const dummyUser = {
            id: id,
            name: "Trupti Pimpale",
            email: "trupti@gmail.com"
        };
        callback(dummyUser); // Pass the user data to the callback function
    }, 2000); // 2-second delay
}

// Step 4: Create a function named displayUser that takes a user object as an argument and displays the user details using console.log().
function displayUser(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`User Name: ${user.name}`);
    console.log(`User Email: ${user.email}`);
}

// Step 5: Call the getUserData function with a user ID and the displayUser function as the callback.
getUserData(1, displayUser);

// Step 6: The displayUser function is invoked with the user object received from the getUserData function.
// This happens automatically when the getUserData function calls the callback.
