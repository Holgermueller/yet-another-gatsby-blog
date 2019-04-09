import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ClassPage = () => (
  <Layout>
    <SEO title="Class-Page" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello, class....</h1>
    <p>Be prepared to be called on at any moment!</p>
    <h1>Victim's name goes here!</h1>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/profile/">See profile page.</Link>
  </Layout>
)

export default ClassPage
