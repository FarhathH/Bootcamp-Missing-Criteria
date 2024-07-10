//This code is meant to check student's grades.
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


//Checking for any even numbers.
function isEven(number) {
    if (number % 2 == 0) {
        return false
    }
    return true
}


//Checking the area of a triangle.
function triangleArea(base, height) {
    return base * 2 / height
}