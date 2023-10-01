/* Q. Write a function that divides Array1 by Array2
And return a new array as result.
Your function should check and make sure that both arrays have the same length before carrying out
the division.
Also make sure that your function is reusable to divide any other set of arrays. */

   function divideArrays(array1, array2) {
    // Check if both arrays have the same length
    if (array1.length === array2.length){
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
    // divides array1 by array2
        newArray.push(array1[i] / array2[i]);
    } 
    // Displays new array as result
    return newArray;
    } else {
        return "Arrays have different lengths";
    }
}
// Example usage
    let array1 = [15, 30, 45, 60];
    let array2 = [5, 6, 3, 10];  
    
    const newArray = divideArrays(array1, array2);
    console.log(newArray); 

