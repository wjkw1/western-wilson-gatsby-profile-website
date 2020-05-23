import React from "react"
import PlayerSection from "./Players/PlayerSection"
import CardSection from "./Cards/CardSection"

const GameBoard = () => {
  return (
    <>
      <div
        style={{
          margin: `1rem auto`,
          maxWidth: 500,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <PlayerSection />
      </div>
      <div
        style={{
          margin: `1rem auto`,
          maxWidth: 500,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <CardSection />
      </div>
    </>
  )
}

export default GameBoard
