// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {

    return a.filter(function rem(x) { return x < 0 }).length;
}