import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="ABOUT" />
        <h1>This is the about page</h1>
      </Layout>
    )
  }
}