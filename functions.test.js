
// /*
//     Checking that the function checkes the parameter is an evem number
// */
// try 
// {
//     function isEven(number) { //This function is being tested to check an even or odd number.
//         if (number % 2 == 0) { 
//             return false
//         }
//         return true
//     }
//     console.log(isEven(4)); //Checking function with printed statement.
//     if(isEven(4) == false){
//         throw new Error("4 is an even number"); //Error message to be printed if the condition is met.
//     }    
// }
// catch (error) 
// {
//     console.log(error); // Statement never prints as the function works, 
// }


// /*
//     Now checking the function for school grades using a list
// */

// try
// {
//     let student = { //List used to check the function.
//         name:"Michelle",
//         score:34,
//         grade:"" // object used to make the comparison.
//     }
//     //function thats being tested.
//     function setGrade(student) {
//         if (student.score < 40) {
//             student.grade = "F"
//         } else if (40 <= student.score || student.score <= 50) {
//             student.grade = "D"
//         } else if (50 <= student.score || student.score <= 60) {
//             student.grade = "C"
//         } else if (60 <= student.score || student.score <= 70) {
//             student.grade = "B"
//         } else {
//             student.grade = "A"
//         }
//     }

//     console.log(student); //output the entire list, but grade has not changed.
    

//     if(student.grade != "F"){
//         throw new Error("This should be at F");
//     }    
// }
// catch (error)
// {
//     console.log(error)
// }

// console.assert();

let student = { //List used to check the function.
    score:66,
    grade:" " // object used to make the comparison.
}

function setGrade(student) {
    if (student.score < 40) {
        student.grade = "F"
    } else if (40 <= student.score || student.score <= 50) {
        student.grade = "D"
    } else if (50 <= student.score || student.score <= 60) {
        student.grade = "C"
    } else if (60 <= student.score || student.score <= 70) {
        student.grade = "B"
    } else {
        student.grade = "A"
    }
}

console.assert(student.grade == "B", "The grade should be B.");
console.log();

// function isEven(number) { //This function is being tested to check an even or odd number.
//     if (number % 2 == 0) { 
//         return false
//     }
//     return true
// }

// console.assert(isEven(3) == false, "This should be an odd number");