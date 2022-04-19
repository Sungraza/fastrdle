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
  
  createAlertState(state) {
      localStorage.setItem("alertState", state);
  }
  
  pressKeyOnBoard(key) {
      if (localStorage.getItem("gameState") == "won" || localStorage.getItem("timer") == "up" || localStorage.getItem("timer") == "idle") return;
      
      if (key == "Back") {
          onBackspace();
      } else if (key == "Enter") {
          onEnter();
          localStorage.setItem("currentRow", localStorage.getItem("currentRow")+1);
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
            <Row style={{ justifyContent: "center" }}>
                <Col sm={8}>
                <Row style={{ justifyContent: "space-evenly" }}>
                    <Col>
                        <Grid 
                        onPress={(e) => onPress(e)}
                        onEnter={() => onEnter()} 
                        onBackspace={() => onBackspace()} 
                        createSolution={(list) => this.createSolution(list)} 
                        changeGameState={(state) => this.changeGameState(state)}
                        changeRow={(row) => this.changeRow(row)}
                        createAlertState={(state) => this.createAlertState(state)}
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