import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/**
 * Displays a card based on the input props
 * suit, value, show, , drinkType = 'give/take/both' (not sure if needed)
 */
const Card = props => {
  //set up the hook for showing the image on click
  const [show, setShow] = useState(props.show)

  //get the card back image
  const data = useStaticQuery(graphql`
    query {
      cardBack: file(relativePath: { eq: "card-back.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
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

  //flip the card on click
  const handleClick = e => {
    setShow(!show)

    console.log(props)
  }

  const cardHeight = "140px",
    cardWidth = "100px",
    padding = "6px",
    margin = "6px",
    borderRadius = "6px"

  if (show) {
    return (
      <>
        <button
          style={{
            color: colour,
            width: cardWidth,
            height: cardHeight,
            borderRadius: borderRadius,
            padding: padding,
            margin: margin,
          }}
          onClick={handleClick}
        >
          {props.suit} : {props.value}
        </button>
      </>
    )
  } else {
    //show the back of card
    return (
      <>
        <button
          style={{
            color: colour,
            width: cardWidth,
            height: cardHeight,
            fontSize: `0`,
            borderRadius: borderRadius,
            padding: padding,
            margin: margin,
          }}
          onClick={handleClick}
        >
          <Img
            fluid={data.cardBack.childImageSharp.fluid}
            alt="Back of card"
            style={{
              color: colour,
              fontSize: `0`,
              padding: `0`,
              margin: `0`,
              marginBottom: `0`,
            }}
          />
        </button>
      </>
    )
  }
}

/**TODO: set the prop types
 * suit = string
 * value = string
 * show = boolean, null as default
 * import PropTypes from "prop-types"
 */

export default Card
