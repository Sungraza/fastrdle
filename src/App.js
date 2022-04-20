import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Timer from './components/Timer';
import Message from './components/Message'

import { onPress, onBackspace, onEnter } from './controller/KeyControls';
import { createTimer, startTimer } from './controller/TimerControls';
import { createAlert } from './controller/AlertControls';

class App extends React.Component {
  constructor() {
    super();
  }
  
  createSolution(list) {
    const random = Math.floor(Math.random() * ((list.length-1) + 1));
    localStorage.setItem("solution", list[random]);
  }
  
  changeGameState(state) {
      localStorage.setItem("gameState", state);
  }
  
  
  pressKeyOnBoard(key) {
      if (localStorage.getItem("gameState") == "won") return createAlert("Great Job!", "You guessed the word, " + localStorage.getItem("solution") + "!", "success");
      if (localStorage.getItem("gameState") == "lost") return createAlert("Game Over", "You didn't win, the word was " + localStorage.getItem("solution"), "dark");
      if (localStorage.getItem("timer") == "idle") return createAlert("Error", "Please start the timer!", "danger");
      if (localStorage.getItem("timer") == "up") return createAlert("Game Over", "You couldn't finish the game before the timer finished!", "dark");
            
      if (key == "Back") {
          onBackspace();
      } else if (key == "Enter") {
          onEnter();
      } else {
          onPress(key);
      }
  }
  
  changeRow(row) {
      localStorage.setItem("currentRow", row);
  }

  render() {
    return (
        <Container>
            <Header/>
            <Message />
            <Row className="appCont" style={{ justifyContent: "center", verticalAlign: "middle" }}>
                <Col sm={8}>
                <Row style={{ justifyContent: "space-evenly", display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
                    <Col>
                        <Grid 
                        onPress={(e) => onPress(e)}
                        onEnter={() => onEnter()} 
                        onBackspace={() => onBackspace()} 
                        createSolution={(list) => this.createSolution(list)} 
                        changeGameState={(state) => this.changeGameState(state)}
                        changeRow={(row) => this.changeRow(row)}
                        />
                    </Col>
                    <Col>
                        <Timer 
                        createTimer={() => createTimer()}
                        startTimer={(el, sec) => startTimer(el, sec)}
                        />
                    </Col>
                </Row>
                <br />
                <br />
                <Keyboard 
                pressKey={(key) => this.pressKeyOnBoard(key)}
                />
                </Col>
            </Row>
            <div className="LastUpdated">
                <p>Last Updated: 4/18/2022<strong></strong></p>
            </div>
        </Container>
    )
  }
}

export default App;