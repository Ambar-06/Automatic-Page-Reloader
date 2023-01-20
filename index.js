let time = 125;
let minutes = Math.floor(time/60);
let seconds = time-minutes*60;


document.addEventListener('DOMContentLoaded', function(){
    setInterval(function(){
        if (seconds > -1){
            document.querySelector('#timer').innerHTML = minutes + ' m ' + seconds + ' s';
            let today_ = new Date();
            document.querySelector('#today').innerHTML = today_
            seconds--;
            if (seconds === -1 && minutes ===0){
                window.location.reload();
            }
            else if (seconds === -1 && minutes !== 0){
                minutes--;
                seconds = 59
            }
        }
    }, 1000)
})