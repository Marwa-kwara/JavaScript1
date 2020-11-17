function gradeCalculator(studentsGrade,maxGrade){
    //let percentage is a variable to calculate percentage for the grade 
    let percentage = (studentsGrade/maxGrade) * 100;
// I am going to use switch statement to check the grades.
    switch(true){
        case percentage >= 90  :
            return "You got a A (" + percentage + " %)!";
            break;
    
        case percentage >= 80 && percentage<=90 :
            return "You got a B (" + percentage + " %)!";
            break;

        case percentage >= 70 && percentage<=80:
            return "You got a C (" + percentage + " %)!";
            break;

        case percentage >= 60 && percentage<=70:
            return "You got a D (" + percentage + " %)!";
            break;

        case percentage >= 50  && percentage<=60:
            return "You got a E (" + percentage + " %)!";
            break;

        case percentage<50 :
            return "You got a F (" + percentage + " %)!";
            break;
        } 
}

console.log(gradeCalculator(90,100));   
console.log(gradeCalculator(80,100));   
console.log(gradeCalculator(70,100));  
console.log(gradeCalculator(60,100));   
console.log(gradeCalculator(50,100)); 
console.log(gradeCalculator(40,100));  
