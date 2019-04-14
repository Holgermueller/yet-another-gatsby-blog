import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const nameDisplay ={
  backgroundColor: "red",
  textAlign: "center",
  width: "fit content",
  borderRadius: "15px",
  padding: "8px"
}

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
        <h1 style={nameDisplay}>Victim's name goes here!</h1>
        <button name="selectStudent" onClick={this.handleSelect}>
          SELECT A STUDENT
        </button>
        <br />
        <hr />
        <h4>Class roster goes here</h4>
      </Layout>
    )
  }
}
