import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Images from './components/Images';
import './App.css';

// function App() {
//   return (
//     <>
//     <Header />
//     <div className="container">
//       <Images />
//     </div>
//     </>
//   );
// }

// export default App;

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     score: 0,
  //     topScore: 0
  //   };
  // }

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