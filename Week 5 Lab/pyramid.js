function printFigure(n) {
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    // Print each row with 3*n '*' characters
    for (let i = 1; i <= n; i++) {
        const stars = "*".repeat(3 * i); // Calculate '*' characters
        console.log(stars.padStart(3 * n + stars.length / 2));
    }
}

// Example usage:
const n = parseInt(prompt("Enter a positive integer:"));
printFigure(n);
