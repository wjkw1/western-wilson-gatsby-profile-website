import React from "react"
import Row from "./Row"

const CardSection = props => {
  const wilds = ["1", "2", "3", "4"]
  const suits = ["♠︎", "♥︎", "♣︎", "♦︎"]
  const values = [
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

  //
  let cardDeck = []
  const buildDeck = () => {
    let card = []
    let index = 0
    let id = ""
    //loop through
    suits.forEach(suit => {
      values.forEach(value => {
        id = "cardId_" + index++
        card = { key: id, suit: suit, value: value, isFaceUp: false }
        cardDeck.push(card)
      })
    })

    wilds.forEach(value => {
      id = "cardId_" + index++
      card = { key: id, suit: "*", value: value, isFaceUp: false }
      cardDeck.push(card)
    })

    //TODO: remove this log
    console.log(cardDeck)
  }

  //build the deck
  buildDeck()

  return (
    <>
      <div
        style={{
          color: `red`,
        }}
      >
        CardSection
      </div>
      <Row deck={cardDeck} />
    </>
  )
}

export default CardSection
