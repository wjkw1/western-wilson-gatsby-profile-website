import React from "react"
import Player from "./Player"

const PlayerSection = props => {
  //TODO: pass the cardValues, number of players and handSize through to Player Section
  let numberOfPlayers = 10,
    numberOfCardsInHand = 3

  //Players have no need for suits
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ]

  //Fisher-Yates shuffle, walks through array and replaces with a random other value
  const shuffleArrayList = array => {
    let arrayCopy = [...array]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
    }
    return arrayCopy
  }

  //function to create an object that contains a players hand
  const assignPlayerHands = (
    numberOfPlayers,
    numberOfCardsInHand,
    cardValues
  ) => {
    let players = []
    let shuffledCardValues = shuffleArrayList(cardValues)

    //loop through players and assign the hands
    let playerIndex,
      handIndex,
      currentCardValueIndex = 0
    for (playerIndex = 0; playerIndex < numberOfPlayers; playerIndex++) {
      let name = "Player " + (playerIndex + 1)
      let hand = []
      for (handIndex = 0; handIndex < numberOfCardsInHand; handIndex++) {
        if (currentCardValueIndex >= shuffledCardValues.length) {
          currentCardValueIndex = 0
        }
        hand.push(shuffledCardValues[currentCardValueIndex++])
      }
      //push the details to the player object
      players.push({ key: "playerKey_" + playerIndex, name: name, hand: hand })
    }
    //TODO: remove this line
    console.log(players)
    return players
  }

  let players = assignPlayerHands(
    numberOfPlayers,
    numberOfCardsInHand,
    cardValues
  )

  return (
    <>
      <div
        style={{
          color: `red`,
        }}
      >
        PlayerSection
      </div>

      {players.map(player => {
        return <Player key={player.key} name={player.name} hand={player.hand} />
      })}
    </>
  )
}

export default PlayerSection
