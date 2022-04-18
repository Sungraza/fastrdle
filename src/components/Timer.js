import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const Timer = (props) => {
    props.createTimer();
    
    return (
        <div style={{ justifyContent: "center", textAlign: "center", verticalAlign: "middle" }}>
            <br />
            <br />
            <div className="Timer">
                <span className="secondsLeft">
                    15s
                </span>
            </div>
            <Button variant="danger" onClick={() => props.startTimer("secondsLeft", 15)} className="start">Start</Button>
        </div>
    )
}

export default Timer;