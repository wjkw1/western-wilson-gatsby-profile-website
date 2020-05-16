import React from "react"
import Deck from "./Deck"
import Player from "./Player"

const GameBoard = () => {
  const hand = [0, 1, 2, 3]

  return (
    <>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Player name="Player 1" hand={hand} />
        <Deck />
      </div>
    </>
  )
}

export default GameBoard
