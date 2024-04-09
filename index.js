

function countdown() {
    let endData = new Date("2024-5-1 23:59:59").getTime();
    let now = new Date().getTime();
    
    let DayData = document.getElementById("days")
    let HouresData = document.getElementById("hours")
    let MinutesData = document.getElementById("minutes")
    let SecondsData = document.getElementById("seconds")
    
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let Differnce = endData - now

    const Day = Math.floor(Differnce / days);
    const Hour = Math.floor((Differnce % days) / hours);
    const Minute = Math.floor((Differnce % hours) / minutes);
    const Second = Math.floor((Differnce % minutes) / seconds);

    DayData.innerHTML = Day
    HouresData.innerHTML = Hour
    MinutesData.innerHTML = Minute
    SecondsData.innerHTML = Second
}

setInterval(countdown, 1000)