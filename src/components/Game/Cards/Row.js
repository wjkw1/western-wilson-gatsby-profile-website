import React from "react"
import Card from "./Card"

/**
 * Card row, will attempt to display all cards
 */
const Row = props => {
  //TODO: sanitise the card information
  //
  return (
    <>
      <div
        className="row"
        style={{
          margin: `1rem auto`,
          maxWidth: 960,
          padding: `0.0875rem 0.45rem`,
          display: `flex`,
          justifyContent: `center`,
        }}
      >
        {props.cards.map(card => {
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
