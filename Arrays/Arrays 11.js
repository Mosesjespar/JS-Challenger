// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
    function avg(x, y) {
        return (x + y)
    }
    return arr.reduce(avg) / arr.length


}