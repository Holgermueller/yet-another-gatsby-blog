import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SignUpPage = () => (
  <Layout>
    <SEO title="Sign-Up" />
    <h1>Register Here!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SignUpPage
