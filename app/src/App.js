import React from 'react';
import Portfolio from './img/portfolio.png'
import FinancialLogo from './img/ffLogo.png'
import TtrLogo from './img/ticTacRobotlogo.png'
import styled from 'styled-components'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hovered: [false, false]
    }

    this.handleHoverOut = this.handleHoverOut.bind(this)
    this.handleHoverIn = this.handleHoverIn.bind(this)
  }

  handleHoverOut(id) {
    console.log('out', id)
    let newHovered = this.state.hovered
    newHovered[id] = false
    this.setState(prevState => {
      return {
        hovered: newHovered
      }
    })
  }

  handleHoverIn(id) {
    console.log('in', id)
    let newHovered = this.state.hovered
    newHovered[id] = true
    this.setState(prevState => {
      return {
        hovered: newHovered
      }
    })
  }

  render() {
    const Styles = styled.div`
      .background {
          background: url(${ Portfolio }) no-repeat center fixed;
          background-position: center;
          background-size: cover;
          background-attachment: scroll;
          height: 3100px;
          padding: 140px 100px;
          color: #ffffff
      }

      .card {
        color: #000
      }

      .link1 {
        background: #ffffff;
        border: 40px solid #cccccc;
        border-radius: 12px;
        float: left;
        line-height: 450px;
        height: 450px;
        margin-right: -1px;
        margin-top: -1px;
        padding: 0;
        width: 500px;
        justifyContent:'center';

        &:hover {
          border: 40px solid #888888;
        }
      }

      .link2 {
        background: #ffffff;
        border: 40px solid #cccccc;
        border-radius: 12px;
        float: right;
        line-height: 450px;
        height: 450px;
        margin-right: -1px;
        margin-top: -1px;
        padding: 0;
        width: 500px;
        justifyContent:'center';


        &:hover {
          border: 40px solid #888888;
        }
      }

      .imgLong {
        height: auto;
        max-width: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .imgTall {
        width: auto;
        max-height: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .description {
        font-size: 20px;
        line-height: 20px;
        color: #ff9f1c;
      }

    `

    let ff = (
      <img className='imgTall' src={ FinancialLogo }/>
    )
    let ffText = (
      <div>
        <h1 className='description'>Financial Forecast is a marriage between finance and deep learning.  Using a convolutional neural network and customizable stock data, the application will predict the stock price a day in the future.</h1>
      </div>
      
    )
    let ttr = (
        <img className='imgLong' src={ TtrLogo }/>
    )
    let ttrText = (
      <div>
        <h1 className='description'>Tic-Tac-Robot is a game that the user cannot win.  While it does not sound too fun for the user, it implements a minimax algorithm (optimized with alpha beta pruning) to play perfect tic-tac-toe as efficiently as possible.</h1>
      </div>
      
    )

    // if (this.state.hovered[0]) {
    //   ff = <p>jfjfjfjfjf</p>
    // }
    // else {
    //   ff = (
    //     <img src={ FinancialLogo }/>
    //   )
    // }

    // if (this.state.hovered[1]) {
    //   ttr = (
    //     <p>jfjfjfjfjf</p>
    //   )
    // }
    // else {
    //   ttr = (
    //     <img src={ TtrLogo }/>
    //   )
    // }


    return (
      <Styles>
        <div className='background'>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Container>
            <Row>
              <Col>
              </Col>
              <Col>
                <a href='https://anakeeb.github.io/financial-forecast-deploy'>
                  <button className='link1' onMouseEnter={() => this.handleHoverIn(0)} onMouseLeave={() => this.handleHoverOut(0)}>
                    { this.state.hovered[0] ? ffText : ff }
                  </button>
                </a>
                
                
              </Col>
              <Col>
              </Col>
              <Col>
                <a href='https://anakeeb.github.io/tic-tac-robot-deploy'>
                  <button className='link2' onMouseEnter={() => this.handleHoverIn(1)} onMouseLeave={() => this.handleHoverOut(1)}>
                    { this.state.hovered[1] ? ttrText : ttr }
                  </button>
                </a>
                
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
          
        </div>
      </Styles>
      
    )
  }
  
}

export default App;
