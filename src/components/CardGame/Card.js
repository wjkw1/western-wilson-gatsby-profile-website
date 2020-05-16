import React from "react"

const Card = props => {
  if (props.suit === "WILD") {
    return (
      <div
        style={{
          color: `purple`,
        }}
      >
        {props.value}
      </div>
    )
  } else if (props.suit === "♣︎" || props.suit === "♠︎") {
    return (
      <>
        <div style={{}}>
          {props.suit} : {props.value}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div
          style={{
            color: `red`,
          }}
        >
          {props.suit} : {props.value}
        </div>
      </>
    )
  }
}

export default Card
