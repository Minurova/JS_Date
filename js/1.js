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