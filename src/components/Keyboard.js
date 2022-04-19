import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Keyboard = (props) => {

    let firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => 
        <Button onClick={() => props.pressKey(letter)} variant="secondary" id={letter} key={letter}>{letter}</Button>
    )
    
    let secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => 
        <Button onClick={() => props.pressKey(letter)} variant="secondary" id={letter} key={letter}>{letter}</Button>
    )
    
    let thirdRow = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Back"].map((letter) => 
        <Button onClick={() => props.pressKey(letter)} variant="secondary" id={letter} key={letter}>{letter}</Button>
    )
    
    return (
        <Container className="Keyboard">
            <div className="keyRow">
                { firstRow }
            </div>
            <div className="keyRow">
                { secondRow }
            </div> 
            <div className="keyRow">
                { thirdRow }
            </div>
        </Container>
    )
}

export default Keyboard;