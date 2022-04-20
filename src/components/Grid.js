import WORDLIST from '../words';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { createAlert } from '../controller/AlertControls';

const Grid = (props) => {
    
    props.createSolution(WORDLIST.WORDLIST);
    props.changeGameState("guessing");
    props.changeRow(1);
    
    useEffect(() => {
        const listener = ((e) => {
            if (!e.ctrlKey && !e.shiftKey) {
                if (localStorage.getItem("gameState") == "won") return;
                if (localStorage.getItem("gameState") == "lost") return createAlert("Game Over", "You didn't win, the word was " + localStorage.getItem("solution"), "dark");
                if (localStorage.getItem("timer") == "idle") return createAlert("Error", "Please start the timer!", "danger");
                if (localStorage.getItem("timer") == "up") return createAlert("Game Over", "You couldn't finish the game before the timer finished!", "dark");
            
                if (e.key.match(/^[A-Za-z]+$/) && e.key.length < 2) {
                    e.preventDefault();
                    props.onPress(e.key);
                } else if (e.key == "Enter") {
                    props.onEnter();
                } else if (e.key == "Backspace") {
                    props.onBackspace();
                }
            }
        });
        
        window.addEventListener('keydown', listener);
        
        return () => {
            window.removeEventListener('keydown', listener);
        }
      }, []);
    
    let firstRow = [
    <div className="tile empty" style={{ userSelect: "none" }} key="0">&nbsp;&nbsp;&nbsp;</div>,
    <div className="tile empty" style={{ userSelect: "none" }} key="1">&nbsp;&nbsp;&nbsp;</div>, 
    <div className="tile empty" style={{ userSelect: "none" }} key="2">&nbsp;&nbsp;&nbsp;</div>, 
    <div className="tile empty" style={{ userSelect: "none" }} key="3">&nbsp;&nbsp;&nbsp;</div>, 
    <div className="tile empty" style={{ userSelect: "none" }} key="4">&nbsp;&nbsp;&nbsp;</div>
    ]
    let secondRow = [...firstRow];
    let thirdRow = [...firstRow];
    let fourthRow = [...firstRow];
    let fifthRow = [...firstRow];
    let sixthRow = [...firstRow];
    
    return (
        <Container className="Grid">
            <div id="row1" className="gridRow flex justify-center">
                { firstRow }
            </div>
            <div id="row2" className="gridRow flex justify-center">
                { secondRow }
            </div>
            <div id="row3" className="gridRow flex justify-center">
                { thirdRow }
            </div>
            <div id="row4" className="gridRow flex justify-center">
                { fourthRow }
            </div>
            <div id="row5" className="gridRow flex justify-center">
                { fifthRow }
            </div>
            <div id="row6" className="gridRow flex justify-center">
                { sixthRow }
            </div>
        </Container>
    )
}

export default Grid;