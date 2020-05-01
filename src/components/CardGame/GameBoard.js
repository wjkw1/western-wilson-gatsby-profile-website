import React from "react"
import Deck from "./Deck"

const GameBoard = () => {
  return (
    <>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Deck />
      </div>
    </>
  )
}

export default GameBoard
