let grades = {
    Math: 18,
    physics: 9,
    programming: 20,
    database: 14,
    english: 7
};
for (let lesson in grades) {
    let score = grades[lesson];
    if (score < 10) {
        console.log(lesson + ": مردود");
    } else if (score >= 10 && score <= 15) {
        console.log(lesson + ": متوسط");
    } else{
        console.log(lesson + ": عالی");
    }
}