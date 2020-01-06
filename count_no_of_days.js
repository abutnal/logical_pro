 // To set two dates to two variables 
var date1 = new Date("01/1/2020"); 
var date2 = new Date("01/6/2020"); 

// One day Time in ms (milliseconds) 
var one_day = 1000 * 60 * 60 * 24; 
  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / one_day; 
  
//To display the final no. of days (result) 
document.write("Total number of days between dates  <br>"
              
              + Difference_In_Days + ' days'); 
