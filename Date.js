var date = new Date();

console.log(date);
console.log(date.getDay());
console.log(date.getDate());


// Get Last date of the month
function lastDateOfMonth(year, month) {
    var date = new Date(year, month, 0);
    console.log(date.getDay());
    return date.getDate();
}

console.log(lastDateOfMonth(2022, 2));

// Difference between two dates in number of days
function getDiff(date1, date2) {
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);

    let diff = dt2.getTime() - dt1.getTime();
    return (diff / (1000*60*60*24));
}

console.log(getDiff("04/02/2014", "11/02/2014"));