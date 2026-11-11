let student = {
    name: "Reza",
    attendance: 14,
    totalSessions: 16
};
if (student.attendance === student.totalSessions){
    console.log("حضور کامل");
} else if (student.attendance < 10) {
    console.log("محروم از امتحان");
} else {
    console.log("اجازه شرکت در امتحان دارد");
}