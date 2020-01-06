// Days is an array of weekdays: 0 is Sunday, ..., 6 is Saturday
function countWeekDays( days, date1, date2 ) {
  var totalDays = 1 + Math.round((date2-date1)/(24*3600*1000));

       const data = days.reduce((total, weekDay)=>{
                 return  total += Math.round((totalDays + (date1.getDay() + 6- weekDay) % 7) / 7 );
              },0)
		  		 return data;
}

// Example on counting Mondays, Wednesdays, and Fridays [1,3,5] between two dates:
const date1 = new Date(2020,1,1);
const date2 = new Date(2020,1,6);
const output = countWeekDays([1,3,5], date1, date2) // 1

console.log(output);