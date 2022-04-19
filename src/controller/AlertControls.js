export const createAlert = ((header, body, color, state) => {
    const message = document.getElementsByClassName("Message")[0];
    const Alert = message.children[0];
    const Header = Alert.children[1];
    const Body = Alert.children[2];
    
    message.classList.add("visible");
    let i = 0;
    
    if (header != "Great Job!" && header != "Game Over") {
        let close = setTimeout(() => {
            message.classList.remove("visible");
        }, 3*1000)
    
        // prob. bad practice
        let check = setInterval(() => {
            if (i == 3) {
                clearInterval(check);
                localStorage.setItem("alertState", parseInt(localStorage.getItem("alertState"))+1);
                message.classList.remove("visible");
            }
            
            if (localStorage.getItem("alertState") != state) {
                clearInterval(check);
                clearTimeout(close);
                localStorage.setItem("alertState", parseInt(localStorage.getItem("alertState"))+1);
                message.classList.remove("visible");
            }
        
            i++;
        }, 1000);
    }
    
    Alert.classList.replace("alert-success" || "alert-dark" || "alert-danger", ("alert-"+color));
    Header.innerHTML = header;
    Body.innerHTML = body;
    
    localStorage.setItem("alertState", parseInt(localStorage.getItem("alertState"))+1)
});