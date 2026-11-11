let products = {
    bread :  25000,
    milk : 45000,
    cheese : 180000,
    rice : 950000,
    oil : 220000,
};
console.log(" محصولات ارزان تر از 50 هزار تومان:");
for (let item in products) {
    if (products[item] < 50000) {
        console.log("- " + item + ": " + products[item] + " تومان");
    
    }
}
console.log("محصولات گران تر از 500 هزار تومان :");
let expensiveCount = 0;
for ( let item in products) {
    if (products[item] > 50000) {
        console.log("- " + item + ": " + products[item] + "تومان ");
        expensiveCount++;
    }
}
console.log("تعداد محصولات گران تر از 500 هزار تومان :" + expensiveCount);
