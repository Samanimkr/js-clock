const secondsHand = document.getElementsByClassName('seconds_hand')[0];
const minutesHand = document.getElementsByClassName('minutes_hand')[0];
const hoursHand = document.getElementsByClassName('hours_hand')[0];

// var num = 6;
let syncing = true;
setInterval(() => {
    const d = new Date();
    const secs = d.getSeconds();
    const mins = d.getMinutes();
    const hrs = d.getHours();

    secondsHand.style.WebkitTransitionDuration = `${syncing || secs===0 ? 0 : 0.2}s`;
    secondsHand.style.transformOrigin = "bottom center";
    secondsHand.style.webkitTransform = `rotate(${secs*6}deg)`;

    if (syncing || secs === 0) {
        minutesHand.style.WebkitTransitionDuration = `${syncing || mins===0 ? 0 : 0.2}s`;
        minutesHand.style.transformOrigin = "bottom center";
        minutesHand.style.webkitTransform = `rotate(${mins*6}deg)`;
    }
    
    if (syncing || mins === 0) {
        hoursHand.style.WebkitTransitionDuration = `${syncing || hrs===0 ? 0 : 0.2}s`;
        hoursHand.style.transformOrigin = "bottom center";
        hoursHand.style.webkitTransform = `rotate(${hrs*6}deg)`;
    }

    if (syncing) syncing = false;
}, 1000);