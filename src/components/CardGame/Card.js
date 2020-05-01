import React from "react"

const Card = props => {
  return (
    <>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <p>{props.suit}</p>
        <p>{props.value}</p>
      </div>
    </>
  )
}

export default Card
