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
    next: next,
    curr: today,
    prev: prev,
}}
console.log(getObjectMyDays(days));
}
function task4() {
    let timeInMiliseconds=prompt(`Введите количество миллисекунд`);
    if(Number.isInteger(timeInMiliseconds) || timeInMiliseconds<0)
{
alert("Input Error");
}
else {function msToTime(timeInMiliseconds) {
    let d,h,m,s;
    d = Math.floor(timeInMiliseconds/1000/60/60/24);
    h = Math.floor((timeInMiliseconds/1000/60/60) % 24);
    m = Math.floor(((timeInMiliseconds/1000/60/60 - h)*60) % 60);
    s = Math.floor((((timeInMiliseconds/1000/60/60 - h)*60 - m)*60) % 60);
d < 10 ? d = `0${d}`: s = `${d}`;
s < 10 ? s = `0${s}`: s = `${s}`;
m < 10 ? m = `0${m}`: m = `${m}`;
h < 10 ? h = `0${h}`: h = `${h}`;
return (`${d}:${h}:${m}:${s}`);}
alert(msToTime(timeInMiliseconds));
}
}
function task5() {
    let data;
    while(true)
    { data = prompt("Введите дату своего рождения - DD.MM.YYYY");
    let re=/^\d{2}([./-])\d{2}\1\d{4}$/;
    if (re.test(data))
    {
    break;
    }
    }
    function getAge(data)
    {
    let now=new Date();
    let ageYear=now.getFullYear()-data.getFullYear();
    let ageMonth=now.getMonth()-data.getMonth();
    return `Возраст в годах ${ageYear}, в месяцах ${ageYear*12+ageMonth}, в днях ${ageYear*365+ageMonth*30+now.getDate()-data.getDate()+ageYear/4}`;
    }
    console.log(data);
    let arr=data.split(".");
    data=new Date(arr[2],arr[1],arr[0]);
    alert(getAge(data));
}
function task6() {
    for (let friday of arrayOfFridaythe13In(2023))
            console.log(friday.toString())
        function arrayOfFridaythe13In(year) {
            let array = [];
            for (let month = 0; month < 12; month++) {
                let d = new Date(year, month, 13);
                if (d.getDay() == 5) {
                    array.push(d.toString());
                }
            }
            return array;
        }
}
function task7() {
    let hours = (new Date()).getHours();
if(hours >=16 || hours <6){
    alert('Добрый вечер');    
} else
if(hours >=6 && hours <12){
    alert('Доброе утро');  
} else
if(hours >=12 && hours <16){
    alert('Добрый день');  
}
}