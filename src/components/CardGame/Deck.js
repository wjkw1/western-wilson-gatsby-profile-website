import React from "react"
import Card from "./Card"

const Deck = props => {
  const wilds = ["joker-1", "joker-2"]
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

    suits.map(suit => {
      values.map(value => {
        card = { suit: suit, value: value, isFaceUp: false }
        cardDeck.push(card)
      })
    })

    wilds.map(value => {
      card = { suit: "WILD", value: value, isFaceUp: false }
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
