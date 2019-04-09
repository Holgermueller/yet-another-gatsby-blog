import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class SignUpPage extends React.Component {
  state = {}
  render() {
    return (
      <Layout>
        <SEO title="Sign-Up" />
        <h1>Register Here!</h1>
        <form method="post">
          <input type="text" placeholder="Enter first name" />
          <input type="text" placeholder="Enter last name" />
          <input type="text" placeholder="Enter username" />
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Confirm password" />
          <input type="submit" value="Register" />
        </form>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
