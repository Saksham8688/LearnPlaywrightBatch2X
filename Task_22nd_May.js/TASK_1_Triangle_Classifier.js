// ============================================
// Task 1: Triangle Classifier
// Classify a triangle based on its side lengths:
//   - Equilateral → all three sides are equal
//   - Isosceles   → exactly two sides are equal
//   - Scalene     → no sides are equal
// ============================================

let sideA = 60; // Length of side A in cm
let sideB = 45; // Length of side B in cm
let sideC = 45; // Length of side C in cm

// Step 1: Validate triangle (each side must be > 0
// AND the sum of any two sides must be greater than the third)
if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log("Invalid triangle: sides must be positive numbers.");
}
else if (
    (sideA + sideB <= sideC) ||
    (sideB + sideC <= sideA) ||
    (sideA + sideC <= sideB)
) {
    console.log("Invalid triangle: sum of any two sides must be greater than the third.");
}
// Step 2: Classify the triangle
else if (sideA === sideB && sideB === sideC) {
    console.log("This is an Equilateral Triangle.");
}
else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("This is an Isosceles Triangle.");
}
else {
    console.log("This is a Scalene Triangle.");
}

