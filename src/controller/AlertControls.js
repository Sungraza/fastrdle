export const createAlert = ((header, body, color, state) => {
    const message = document.getElementsByClassName("Message")[0];
    const Alert = message.children[0];
    const Header = Alert.children[1];
    const Body = Alert.children[2];
    
    // return so multiple timeouts aren't created
    if (message.classList.contains("visible")) return;
    
    message.classList.add("visible");

    if (header != "Great Job!" && header != "Game Over") {
        let close = setTimeout(() => {
           message.classList.remove("visible");
        }, 3*1000)
    }

    Alert.classList.replace("alert-success", ("alert-"+color));
    Alert.classList.replace("alert-dark", ("alert-"+color));
    Alert.classList.replace("alert-danger", ("alert-"+color));
    Header.innerHTML = header;
    Body.innerHTML = body;
});
