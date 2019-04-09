import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends React.Component{
  state = {
    username: ``,
    password:``,
  }
  render(){
    return(
      <Layout>
      <SEO title="HOME" />
      <h1>Welcome to Call On Me!</h1>
      <h1>Log in here:</h1>
      <h5>Log in goes here.</h5>
      <h2>Not registered?</h2>
      <Link to="/signup/">Sign up here!</Link>
      <br />
      <Link to="/profile/">See profile page.</Link>
      <Link to="/class/">See class page.</Link>
    </Layout>
    )
  }
}




