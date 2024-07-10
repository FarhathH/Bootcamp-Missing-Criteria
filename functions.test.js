
/*
    first 'try and catch' for 'isEven' method which didn't work. 
    I made the mistake of checking that the function as whole worked instead of
    just the specific condition. 

   " //Checking number is even
    function isEven(number) {
        if (number % 2 == 0) {
            return false
        }
        return true
    }"

*/
try 
{

    function isEven(number) {
        if (number % 2 == 0) { //According to function, because 4 is seen as false.
            return false
        }
        return true
    }

    console.log(isEven(4)); //Checking function with printed statement.
    
} 
catch (e) 
{
    console.log("Something is wrong"); // Statement never prints as the function works, but the
}

try
{
 console.log(4 % 2 == 0); //checking the condition, but it returns true.
}
catch(e)
{
    console.log("Wrong");
}

/*
    Now checking the function for school grades

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
*/

try
{

}
catch(e)
{
    
}

