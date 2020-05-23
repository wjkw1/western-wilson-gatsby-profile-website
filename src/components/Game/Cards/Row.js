import React from "react"
import Card from "./Card"

/**
 * numDrinks(not sure if needed)
 * @param {*} props
 */
const Row = props => {
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
        {props.deck.map(card => {
          return (
            <Card
              key={card.key}
              suit={card.suit}
              value={card.value}
              show={false}
            />
          )
        })}
      </div>
    </>
  )
}

export default Row
