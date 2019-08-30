import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="BLOG" />
        <h2>Story Archive</h2>
        <h2>Blog Archive</h2>
      </Layout>
    )
  }
}