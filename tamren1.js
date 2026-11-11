let order = {
    customer:"sara",
    totalprice: 780000,
    isMember: true
};

if (order.isMember === true){
    console.log("ارسال رایگان است");
} else if (order.totalprice > 1000000){
    console.log("ارسال رایگان است");
} else {
    console.log("هزینه ارسال 50 هزار تومان است");
}