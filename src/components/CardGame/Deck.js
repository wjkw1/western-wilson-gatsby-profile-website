import React from "react"
import Card from "./Card"

const Deck = props => {
  const suits = ["♠︎", "♥︎", "♣︎", "♦︎"]
  const values = [
    "A",
    "1",
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
  let card = []

  return (
    <>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Card suit="♠︎" value="1" isFaceUp="true" />
        <Card suit="♠︎" value="2" isFaceUp="true" />
        <Card suit="♠︎" value="3" isFaceUp="true" />
        <Card suit="♠︎" value="4" isFaceUp="true" />
      </div>
    </>
  )
}

export default Deck
