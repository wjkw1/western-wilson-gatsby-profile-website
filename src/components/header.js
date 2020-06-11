import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2
        className="linkContainer"
        style={{
          margin: `1rem auto`,
          display: `flex`,
        }}
      >
        <Link
          style={{
            margin: `1rem auto`,
            color: `white`,
            textDecoration: `none`,
          }}
          to="/blog/"
        >
          Go to blog
        </Link>
        <Link
          style={{
            margin: `1rem auto`,
            color: `white`,
            textDecoration: `none`,
          }}
          to="/card-game/"
        >
          Go to Card Game
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
