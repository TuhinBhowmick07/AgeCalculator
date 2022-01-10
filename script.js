const present = new Date();
let presentDate = present.getDate();
let presentMonth = present.getMonth() + 1;
let presentYear = present.getFullYear();

if(presentDate < 10){
    presentDate = "0"+presentDate;
}
if(presentMonth < 10){
    presentMonth = "0"+presentMonth;
}
let presentDateString = presentYear+"-"+presentMonth+"-"+presentDate;
document.getElementById("dob").setAttribute("value", presentDateString);
document.getElementById("comparison-date").setAttribute("max",presentDateString);

function CalcAge(){
    let dob = document.getElementsByTagName("input")[0];
    let comparisonDate = document.getElementsByTagName("input")[1];
    let minutes = 1000 *60;
    let hours = minutes*60;
    let days = hours*24;
    let years = days*365.25;

    let timeDiff =(comparisonDate.valueAsDate.getTime() - dob.valueAsDate.getTime());
    let ageYears = (timeDiff / years).toFixed(2);
    let ageMonths = (ageYears*12).toFixed(2);
    let ageDays = (timeDiff / days).toFixed(0);
    document.getElementById("ans").innerHTML = ageYears + " Years | " + ageMonths + " Months | " + ageDays + " Days";
}

function resetPage(){
    document.getElementById("dob").valueAsDate = null;
}