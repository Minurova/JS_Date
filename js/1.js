function task1() {
    let getDayOfWeek=(data)=>dayOfWeek[data.getDay()];
    let data=new Date();
    let dayOfWeek=["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    alert(getDayOfWeek(data));
}
function task2() {
    let dataNow=new Date();
    let dataNewYear=new Date(2024,0,1);
    alert((dataNewYear-dataNow)/(1000*60*60*24));
}
function task3 () {
    let data=new Date();
let days=['вс','пн','вт','ср','чт','пт','сб'];
function getObjectMyDays()
{
let next, prev;
let data=new Date();
let today=data.getDay();
if (today==6) next=0;
else next=today+1;
if (today==0) prev=6;
else prev=today-1;
return {
    next: days[next],
    curr: days[today],
    prev: days[prev],
}}
console.log(getObjectMyDays());
}