//Clock
setInterval(function () {
    let today = new Date();
    let time = today.toLocaleTimeString(['en-GB'], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}