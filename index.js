function displaytime()
   {
const date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let session="AM"

if(hours>=12)
{
session="PM";
hours=hours-12;

}
hours= hours >=10 ? hours : "0"+hours;
minutes= minutes>=10?minutes:"0"+minutes;
seconds= seconds>=10?seconds:"0"+seconds;

const res=`${hours}:${minutes}:${seconds}:${session}` ;

document.getElementById('time').innerHTML= res;


 } 
 setInterval(displaytime,1000);