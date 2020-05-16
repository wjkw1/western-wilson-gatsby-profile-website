import React from "react"
import PlayerSection from "./PlayerSection"
import CardSection from "./CardSection"

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
        <PlayerSection />
      </div>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <CardSection />
      </div>
    </>
  )
}

export default GameBoard
