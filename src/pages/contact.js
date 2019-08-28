import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="CONTACT" />
        <h1>This is the contact page</h1>
      </Layout>
    )
  }
}