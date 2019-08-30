import React from "react"

export default class BlogPage extends React.Component {
  render() {
    return (
      <footer
        style={{
          background: `#00BFFF`,
          display: `flex`,
          position:`fixed`,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 15,
          fontSize: `.85em`,
          fontFamily: `Arial, Helvetica, sans-serif`,
        }}
      >
        <div
          style={{
            color: `white`,
            marginLeft: 8,
          }}
        >
          © {new Date().getFullYear()} Holger Mueller, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Gatsby
          </a>
          /
          <a
            href="https://www.contentful.com/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Contentful
          </a>
          /
          <a>Something</a>
        </div>
      </footer>
    )
  }
}
