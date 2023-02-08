const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const clock = setInterval(function() {

    let dateToday = new Date();

    let nowHour = dateToday.getHours();
    nowHour = ("00" + nowHour).slice(-2);

    let nowMinute = dateToday.getMinutes();
    nowMinute = ("00" + nowMinute).slice(-2);

    let nowSecond = dateToday.getSeconds();
    nowSecond = ("00" + nowSecond).slice(-2);

    hour.textContent = nowHour;
    minute.textContent = nowMinute;
    second.textContent = nowSecond;

})