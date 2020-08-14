import React from 'react';
import Portfolio from './img/portfolio.png';
import styled from 'styled-components'
import './App.css';

class App extends React.Component {
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
    `
    return (
      <Styles>
        <div className='background'>
        </div>
      </Styles>
      
    )
  }
  
}

export default App;
