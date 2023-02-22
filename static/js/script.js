const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const utc = document.getElementById("utc");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const play = document.getElementById("play");
const weather = document.querySelector('.weather');
var dayWeek = $(".dayWeek");

const body = document.getElementById("body");

setInterval(function() {

    let dateToday = new Date();

    let nowHour = dateToday.getHours();
    nowHour = ("00" + nowHour).slice(-2);

    let nowMinute = dateToday.getMinutes();
    nowMinute = ("00" + nowMinute).slice(-2);

    let nowSecond = dateToday.getSeconds();
    nowSecond = ("00" + nowSecond).slice(-2);

    let nowUtc = dateToday.getTimezoneOffset();
    
    let nowYear = dateToday.getFullYear();

    let nowMonth = (dateToday.getMonth()) + 1;
    nowMonth = ("00" + nowMonth).slice(-2);

    let nowDay = dateToday.getDate();
    nowDay = ("00" + nowDay).slice(-2);

    var nowWeekday = dateToday.getDay();
    $(dayWeek).removeClass("nowDayWeek");
    $(dayWeek[nowWeekday]).addClass("nowDayWeek");

    year.textContent = nowYear;
    month.textContent = nowMonth;
    day.textContent = nowDay;
    hour.textContent = nowHour;
    minute.textContent = nowMinute;
    second.textContent = nowSecond;

    weather.style.transform = `rotateZ(${ (nowHour * 15) + (nowMinute * 0.25) }deg)`;

    if (nowHour >= 06 && nowHour <= 18) {
        body.style.backgroundImage = "var(--skyDay)";
    } else {
        body.style.backgroundImage = "var(--skyNight)";
    }

})

function playMusic() {
    let audio = new Audio("static/sound/clock.mp3");
    audio.loop = true;
    audio.play();   
}