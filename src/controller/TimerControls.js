import { createAlert } from './AlertControls';

export const createTimer = (() => {
    localStorage.setItem("timer", "idle");
});

export const startTimer = ((el, seconds) => {
    if (localStorage.getItem("timer") == "running" || localStorage.getItem("timer") == "up") return;
   
    localStorage.setItem("timer", "running");
    let row = 1;
    let prevRow = 1;
    
    const timer = (() => {
        let currentSeconds = parseInt(document.getElementsByClassName(el)[0].innerHTML);
    
        let countdown = setInterval(() => {
            if (localStorage.getItem("currentRow") != prevRow || localStorage.getItem("gameState") == "won" || localStorage.getItem("gameState") == "lost") {
                clearInterval(countdown);
                clearTimeout(stop);
                prevRow++;
            }
            currentSeconds--;
            document.getElementsByClassName(el)[0].innerHTML = currentSeconds + "s";
        }, 1000);

        let stop = setTimeout(() => {
            localStorage.setItem("timer", "up");
            clearInterval(countdown);
            createAlert("Game Over", "You couldn't finish the game before the timer finished!", "dark");
        }, (seconds)*1000)
   })

   setInterval(() => {
     if (localStorage.getItem("currentRow") != row) {
         row++;
         document.getElementsByClassName(el)[0].innerHTML = "15s";
         timer()
     }
   }, 1000);
   
   
   timer();
});