import React from "react"
import PropTypes from "prop-types"

/**
 * Generic Button for the website
 */
const Button = props => {
  return (
    <>
      <button onClick={props.onClick}>{props.value}</button>
    </>
  )
}
//TODO: add default values and more detailed type checking
//Validate the props
Button.propType = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  value: PropTypes.string,
}

export default Button
