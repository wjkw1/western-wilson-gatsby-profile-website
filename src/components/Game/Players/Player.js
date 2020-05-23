import React, { useState } from "react"
import PropTypes from "prop-types"

const Player = props => {
  const [name, setName] = useState(props.name)

  return (
    <>
      <div
        style={{
          color: `black`,
          marginBottom: `10px`,
        }}
      >
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        {props.hand.map(card => {
          return (
            <span
              style={{
                color: `black`,
                padding: `0.2rem`,
              }}
            >
              {card}
            </span>
          )
        })}
      </div>
    </>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  hand: PropTypes.array,
}

Player.defaultProps = {
  name: ``,
  hand: [],
}

export default Player
