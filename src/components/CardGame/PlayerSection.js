import React from "react"
import Player from "./Player"

const PlayerSection = props => {
  const hand = [0, 1, 2, 3]

  return (
    <>
      <div
        style={{
          color: `red`,
        }}
      >
        PlayerSection
      </div>
      <Player name="Player One" hand={hand} />
      <Player name="Player Two" hand={hand} />
      <Player name="Player Three" hand={hand} />
    </>
  )
}

export default PlayerSection
