var oneDay = 1000 * 60 * 60 * 24;

var date1 = new Date(2020,1,1);
var date2 = new Date(2020,1,6);

var presentDate = new Date();
var christmasDate = new Date(presentDate.getFullYear(),11,25) ;

var totalTime = christmasDate.getTime()- presentDate.getTime();

var totalDays = Math.round(totalTime / oneDay)


console.log(totalDays);