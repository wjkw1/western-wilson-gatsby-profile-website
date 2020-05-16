import React from "react"
import Player from "./Player"

const PlayerSection = props => {
  const assignedCardValues = []
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

  //function to create an object that contains a players hand
  const assignPlayerHands = (
    numberOfPlayers,
    numberOfCardsInHand,
    cardValues
  ) => {
    //loop through players and assign the hands
    let playerIndex, handIndex
    for (playerIndex = 0; playerIndex < numberOfPlayers; playerIndex++) {
      for (handIndex = 0; handIndex <= numberOfCardsInHand; handIndex++) {
        //if card value is not empty
        if (cardValues && cardValues.length > 0) {
          //then assign to player, shift into assigned list
        } else {
          //else re-Shuffle from assignedCardValues into other list
          //assign to player, shift into assigned list
        }
      }
    }
  }

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
