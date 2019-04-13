import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignInForm from "../components/SignIn"
import SignUpForm from "../components/SignUp"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="HOME" />
        <h1>Welcome to Call On Me!</h1>
        <h1>Log in here:</h1>
        <SignInForm />
        <br />
        <hr />
        <h2>Not registered?</h2>
        <SignUpForm />
        <br />
      </Layout>
    )
  }
}
