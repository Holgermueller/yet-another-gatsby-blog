import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="CONTACT" />
        <h1>Like my work? Feel free to connect:</h1>

        <h5>
          Disclaimer: I don't post on social media that much, but let's face it,
          followers are a commodity, so follow me!
        </h5>

        <a
          href="https://twitter.com/thatHMMueller"
          style={{ textDecoration: `none` }}
        >
          <h2>Twitter</h2>
        </a>
        <a
          href="https://www.instagram.com/holgerj9/"
          style={{ textDecoration: `none` }}
        >
          <h2>Instagram</h2>
        </a>
      </Layout>
    )
  }
}
