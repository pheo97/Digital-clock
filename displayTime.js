setInterval(DisplayTime,1000)
function DisplayTime(){
    const timeNow = new Date()

    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekday = ["Sunday", "Monday", "Tuesday" , "Wednesday", "Thursday", "Friday" , "Saturday"]
    let today = weekday[timeNow.getDay()]
    let months = ["January" , "February", "March", "April", "May", "June", "July", "August","September","October","November","December"]
    let month = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    let period = "AM"

    if(hours > 12){
        period = "PM"
    }
    if(hours === 0){
        period="AM"
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + period


    document.getElementById("clock").innerHTML = time + " " + today + " " + month + " " + year;
}

DisplayTime()