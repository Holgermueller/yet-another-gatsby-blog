import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: `flex`,
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
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
    </div>
    <div>
    <Link
        to="/blog"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        BLOG
      </Link>
      <Link
        to="/about"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        ABOUT
      </Link>
      <Link
        to="/contact"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
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
