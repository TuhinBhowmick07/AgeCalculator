const today = new Date();
let todayDate = today.getDate();
let todayYear=today.getFullYear();
let todayMonth=today.getMonth()+1;

if (todayDate<10)
todayDate="0"+todayDate;

if(todayMonth<10)
todayMonth="0"+todayMonth;

let todayDateStr=todayYear+"-"+todayMonth+"-"+todayDate;

document.getElementById("date").setAttribute("value",todayDateStr);
document.getElementById("dob").setAttribute("max",todayDateStr);

function calculateAge(){
    let dob=document.getElementsByTagName("input")[0];
    let uptoDate=document.getElementsByTagName("input")[1];
    let minutes=1000*60;
    let hours=minutes*60;
    let days=hours*24;
    let years=days*365.25;
              
    
    let timeDiff=(uptoDate.valueAsDate.getTime() - dob.valueAsDate.getTime());
    let ageYears=(timeDiff/years).toFixed(2);
    let ageMonths=(ageYears*12).toFixed(2);
    let ageDays=(timeDiff/days).toFixed(0);
    if(ageYears<0||ageMonths<0||ageDays<0)
    document.getElementById("result").innerHTML="Enter a Valid Input";
    else
    document.getElementById("result").innerHTML=ageYears+" Years | "+ageMonths+" Months | "+ageDays+" Days";
}
function minimum(){
    let birth=document.getElementById("dob");
let birthDate = birth.valueAsDate.getDate();
let birthYear=birth.valueAsDate.getFullYear();
let birthMonth=birth.valueAsDate.getMonth()+1;

if (birthDate<10)
birthDate="0"+birthDate;

if(birthMonth<10)
birthMonth="0"+birthMonth;

let birthDateStr=birthYear+"-"+birthMonth+"-"+birthDate;

document.getElementById("date").setAttribute("min",birthDateStr);
}
function resetPage(){
    document.getElementById("dob").valueAsDate=null;
    document.getElementById("date").setAttribute("value",todayDateStr);
}