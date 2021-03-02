import './App.css';
import React, {Component} from 'react'
import CardContainer from "./components/CardContainer"
import Sun from "./components/Sun"
import Header from "./components/Header"

class App extends Component {

  state = {
    jokes: [],
    explicit: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/jokes')
      .then(response => response.json())
      .then(jokes => this.setState({
        jokes: jokes,
        explicit: jokes.filter(joke => joke.category === "explicit")
      }))
  }

  render() {
    return (
      <div className="content-container">
        <Header />
        <Sun />
        <CardContainer jokes={this.state.jokes} />
      </div>
    );
  }
}

export default App;
