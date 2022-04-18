import WORDLIST from '../words';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const Grid = (props) => {
    
    props.createSolution(WORDLIST.WORDLIST);
    props.changeGameState("guessing");
    props.changeRow(1);
    
    useEffect(() => {
        const listener = ((e) => {
            if (localStorage.getItem("gameState") == "won" || localStorage.getItem("timer") == "up" || localStorage.getItem("timer") == "idle") return;
            
            if (e.key.match(/^[A-Za-z]+$/) && e.key.length < 2 && !e.ctrlKey && !e.shiftKey) {
                e.preventDefault();
                props.onPress(e.key);
            } else if (e.key == "Enter") {
                props.onEnter();
            } else if (e.key == "Backspace") {
                props.onBackspace();
            }
        });
        
        window.addEventListener('keydown', listener);
        
        return () => {
            window.removeEventListener('keydown', listener);
        }
      }, []);
    
    let firstRow = [
    <div className="tile empty" key="0">&nbsp;</div>,
    <div className="tile empty" key="1">&nbsp;</div>, 
    <div className="tile empty" key="2">&nbsp;</div>, 
    <div className="tile empty" key="3">&nbsp;</div>, 
    <div className="tile empty" key="4">&nbsp;</div>
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