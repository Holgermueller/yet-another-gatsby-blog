import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const style = {
  color: `white`,
  textDecoration: `none`,
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#00BFFF`,
      marginBottom: `1.45rem`,
      display: `flex`,
      zIndex: 15,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={style}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div style={{ margin: `auto` }}>
      <Link to="/blog" style={style}>
        BLOG
      </Link>
      <Link to="/about" style={style}>
        ABOUT
      </Link>
      <Link to="/contact" style={style}>
        CONTACT
      </Link>
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
