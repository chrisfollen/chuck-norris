import React from 'react'

export default function JokeCard(props) {
    return (
        <div className="joke-card">
            <p onClick={props.nextJoke}>{props.currentJoke.joke}</p>
        </div>
    )
}
