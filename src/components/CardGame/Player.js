import React, { useState } from "react"
import PropTypes from "prop-types"

const Player = props => {
  console.log(props.name + "\n" + props.hand + "\n" + props.hand.length)
  const [name, setName] = useState(props.name)

  return (
    <>
      <div
        style={{
          color: `black`,
        }}
      >
        {name} : {props.hand} : {props.hand.length}
      </div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      ></input>
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
