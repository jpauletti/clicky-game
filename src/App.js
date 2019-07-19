import React, { Component } from 'react';
import Header from './components/Header';
import Images from './components/Images';
import './App.css';


class App extends Component {

  state = {
    score: 0,
    topScore: 0
  };

  scoreUp = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  scoreReset = () => {
    this.setState({
      score: 0
    });
  }

  updateTopScore = (currentScore) => {
    if (currentScore > this.state.topScore) {
      this.setState({
        topScore: currentScore
      });
    }
  }

  render() {
    return (
      <>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <div className="container">
          <Images score={this.state.score} topScore={this.state.topScore} scoreUp={this.scoreUp} scoreReset={this.scoreReset} updateTopScore={this.updateTopScore} />
        </div>
      </>
    );
  }
}

export default App;