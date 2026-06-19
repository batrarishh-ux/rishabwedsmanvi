const weddingDate =
new Date("Nov 16, 2026 19:00:00").getTime();

setInterval(() => {

let now = new Date().getTime();

let distance = weddingDate - now;

let days =
Math.floor(distance/(1000*60*60*24));

let hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

let minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

let seconds =
Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);
