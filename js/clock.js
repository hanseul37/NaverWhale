const clock = document.querySelector("h2#clock");
const today = document.querySelector("h3#date");
const week = ["일", "월", "화", "수", "목", "금", "토"];

function getClock(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthDate = date.getDate();
    const day = week[date.getDay()];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${second}`;
    today.innerText = `${year}년 ${month}월 ${monthDate}일 ${day}요일`;
}

getClock();
setInterval(getClock, 1000);