import './App.css';
import React, {Component} from 'react'

class App extends Component {

  state = {
    jokes: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/jokes')
      .then(response => response.json())
      .then(jokes => this.setState({
        jokes
      }))
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
