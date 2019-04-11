import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ClassPage extends React.Component {
  handleSelect = e => {
    e.preventDefault()
    console.log("click")
  }

  render() {
    return (
      <Layout>
        <SEO title="Class-Page" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hello, class....</h1>
        <p>Be prepared to be called on at any moment!</p>
        <h1>Victim's name goes here!</h1>
        <button name="selectStudent" onClick={this.handleSelect}>
          SELECT A STUDENT
        </button>
        <hr />
        <h4>Class roster goes here</h4>
        {/* <Link to="/">Go back to the homepage</Link>
        <Link to="/profile/">See profile page.</Link> */}
      </Layout>
    )
  }
}
