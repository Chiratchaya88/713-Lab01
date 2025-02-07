function getGrade(score) {
    if (score > 80) {
        return "เกรด A";
    } else if (score > 60) {
        return "เกรด B";
    } else if (score > 50) {
        return "เกรด C";
    } else {
        return "เกรด F";
    }
}
console.log(getGrade(85)); 
console.log(getGrade(70)); 
console.log(getGrade(55)); 
console.log(getGrade(40)); 