/* let st = prompt("Enter the value:")
if(st%2==0)
    console.log("even")
else
    console.log("odd") */
let day=prompt("day")
day = day.toLowerCase();
switch(day){
    case 1: day="monday";
        break;
    case 2: day= "Tuesday";
        break;
    case 3: day= "Wednesday";
        break;
    case 4: day= "Thrusday";
        break;
    case 5: day= "Friday";
        break;
    case 6: day= "Saturday";
        break;
    case 7: day= "Sunday";
        break;
    default:
        day="Invalid"
}
console.log("today is:",day)