import React from "react"
import Card from "./Card"

/**
 * numDrinks(not sure if needed)
 * @param {*} props
 */
const Row = props => {
  const deck = props.deck
  return (
    <>
      <div
        className="deck"
        style={{
          margin: `1rem auto`,
          maxWidth: 960,
          padding: `1.0875rem 1.45rem`,
        }}
      >
        {deck.map(card => {
          return (
            <Card
              key={card.key}
              suit={card.suit}
              value={card.value}
              show={card.show}
            />
          )
        })}
      </div>
    </>
  )
}

export default Row
