function task1() {
    let getDayOfWeek=(data)=>dayOfWeek[data.getDay()];
    let data=new Date();
    let dayOfWeek=["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    alert(getDayOfWeek(data));
}