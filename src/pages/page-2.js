import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hello, class...</h1>
    <p>There is no hope for you here.</p>
    <p>You may as well go back to the first page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
