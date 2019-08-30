import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typography from "@material-ui/core/Typography"

const style = {
  color: `white`,
  textDecoration: `none`,
  fontFamily: `Impact, Charcoal, sans-serif`
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
        <Typography variant="button">WRITING</Typography>
      </Link>
      <Link to="/about" style={style}>
        <Typography variant="button">ABOUT</Typography>
      </Link>
      <Link to="/contact" style={style}>
        <Typography variant="button">CONTACT</Typography>
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
