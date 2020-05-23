import React, { useState } from "react"
/**
 * Displays a card based on the input props
 * suit, value, show, , drinkType = 'give/take/both' (not sure if needed)
 */
const Card = props => {
  //const [show, setShow] = useState(props.show)

  //select colour of card text based on suit
  let colour = ""
  if (props.suit === "*") {
    colour = "green"
  } else if (props.suit === "♣︎" || props.suit === "♠︎") {
    colour = "black"
  } else if (props.suit === "♥︎" || props.suit === "♦︎") {
    colour = "red"
  } else {
    colour = "purple"
  }

  /**TODO: show back or front of card depending on boolean prop.show
    if prop isFaceUp is set
    set state and handle click for button
    if isFaceUp == True
     else
      show card back
     else showCard by default
  */
  return (
    <>
      <button
        style={{
          color: colour,
        }}
      >
        {props.suit} : {props.value} : {props.show}
      </button>
    </>
  )
}

/**TODO: set the prop types
 * suit = string
 * value = string
 * show = boolean, null as default
 *
 */
export default Card
