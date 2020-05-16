import React from "react"
import Card from "./Card"

//This gives a deck of 56 cards, divisible by 8 so perfect for our card game
const Deck = props => {
  const wilds = ["joker-1", "joker-2", "joker-3", "joker-4"]
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

  let cardDeck = []
  const buildDeck = () => {
    let card = []
    let index = 0
    let id = ""

    suits.forEach(suit => {
      values.forEach(value => {
        id = "cardId_" + index++
        card = { key: id, suit: suit, value: value, isFaceUp: false }
        cardDeck.push(card)
      })
    })

    wilds.forEach(value => {
      id = "cardId_" + index++
      card = { key: id, suit: "WILD", value: value, isFaceUp: false }
      cardDeck.push(card)
    })

    console.log(cardDeck)
  }

  buildDeck()

  return (
    <>
      <div
        className="deck"
        style={{
          margin: `3rem auto`,
          maxWidth: 960,
          padding: `1.0875rem 1.45rem`,
        }}
      >
        {cardDeck.map(card => {
          return (
            <Card
              key={card.key}
              suit={card.suit}
              value={card.value}
              isFaceUp={card.isFaceUp}
            />
          )
        })}
      </div>
    </>
  )
}

export default Deck
