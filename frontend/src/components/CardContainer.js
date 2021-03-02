import React, { Component } from 'react'
import JokeCard from "./JokeCard"


export default class CardContainer extends Component {

    state = {
        currentJokeIndex: 0
    }

    nextJoke = () => {
        const { currentJokeIndex } = this.state
        const { jokes } = this.props

        const nextIndex = 
            currentJokeIndex + 1 === jokes.length
            ? 0
            : currentJokeIndex + 1

        this.setState({ currentJokeIndex: nextIndex })
    }

    displayCards = () => {
        const currentJoke = this.props.jokes[this.state.currentJokeIndex]
        
        return <JokeCard currentJoke={currentJoke} nextJoke={this.nextJoke} />
    }

    render() {
        return (
            <div id="ground">
                {this.props.jokes.length > 0
                    ? this.displayCards()
                    : ""
                }
            </div>
        )
    }
}
