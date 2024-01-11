// Function to square a number and return the result
function squareNumber(number) {
    console.log("here")
    if (!isNaN(number)) {
        const square = number * number;
        return square;
    } else {
        return null; // Return null for invalid input
    }
}

// Export the squareNumber function to make it accessible in other scripts
module.exports = { squareNumber };