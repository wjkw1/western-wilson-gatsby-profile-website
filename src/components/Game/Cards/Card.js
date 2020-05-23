import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Displays a card based on the input props
 * suit, value, show, , drinkType = 'give/take/both' (not sure if needed)
 */
const Card = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "card-back.png" }) {
        childImageSharp {
          id
          original {
            src
          }
        }
      }
    }
  `)

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

  if (props.show) {
    return (
      <>
        <button
          style={{
            color: colour,
            width: `100px`,
            height: `180px`,
          }}
        >
          {props.suit} : {props.value} : {props.show}
        </button>
      </>
    )
  } else {
    //show the back of card
    return (
      <>
        BACK OF CARD
        <pre>
          {JSON.stringify(data.file.childImageSharp.original.src, null, 4)}
        </pre>
        <button
          src={data.file.childImageSharp.original.src}
          style={{
            color: colour,
            // backgroundImage: data.file.childImageSharp.original.src,
            width: `100px`,
            height: `180px`,
            fontSize: `0`,
          }}
        ></button>
      </>
    )
  }
}

/**TODO: set the prop types
 * suit = string
 * value = string
 * show = boolean, null as default
 *
 */
export default Card
