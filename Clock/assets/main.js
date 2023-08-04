// jawascript for switch clock format
const formatSwitchBtn = $(".format-switch-btn");
$(".format-switchj")
formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");
    var formatValue = formatSwitchBtn.getAttribute("data-format");
    if (formatValue === "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});
// get current time in jawascript
function clock() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    var formatValue = formatSwitchBtn.getAttribute("data-format");
    if (formatValue === "12") {

        hours = hours > 12 ? hours % 12 : hours;
    }


    // set the time period (am/pm)
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}

setInterval(clock, 1000);

// get the date in jawascript
var today = new Date();

const monthName = today.toLocaleString("default", { weekday: "long" });
const dayName = today.toLocaleString("default", { month: "short" });
const dayNumber = today.getDate();
const year = today.getFullYear();


document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
// document.querySelector(".year").innerHTML= year;

// jawascript for dot menu toggle
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotMenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
})

document.addEventListener("click", (e) => {
    if (e.target.id !== "active-menu") {

        dotMenu.classList.remove("active");
    }
})