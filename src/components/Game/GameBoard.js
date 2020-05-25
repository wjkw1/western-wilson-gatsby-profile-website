import React from "react"
import PlayerSection from "./Players/PlayerSection"
import CardSection from "./Cards/CardSection"

const GameBoard = () => {
  //Fisher-Yates shuffle, walks through array and replaces with a random other value
  const shuffleArrayList = array => {
    let arrayCopy = [...array]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
    }
    return arrayCopy
  }

  return (
    <>
      <div
        style={{
          margin: `1rem auto`,
          maxWidth: `1000px`,
          padding: `0 1.0875rem 1.45rem`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `start`,
        }}
      >
        <div style={{ margin: `1rem auto` }}>
          <PlayerSection shuffleArrayList={shuffleArrayList} />
        </div>
        <div style={{ margin: `1rem auto` }}>
          <CardSection shuffleArrayList={shuffleArrayList} />
        </div>
      </div>
    </>
  )
}

export default GameBoard
