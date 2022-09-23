
// Sets counter for seconds
const secondsContainer = document.getElementById("seconds-container");
const seconds = "07/21/2022";
const seconds_DATE = new Date(seconds);
const intlNumberFormatterSEC = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor((now.getTime() - seconds_DATE.getTime()) / 1000);

    secondsContainer.innerText = intlNumberFormatterSEC.format(difference);
    }, 1000);

// Sets counter for days
const daysContainer = document.getElementById("days-container");
const days = "07/21/2022";
const days_DATE = new Date(days);
const intlNumberFormatterDAY = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor(((now.getTime() - days_DATE.getTime()) / 1000) / 86400);

    daysContainer.innerText = intlNumberFormatterDAY.format(difference);
    }, 1000);