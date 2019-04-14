import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassList from "../components/InstructorComponents/classList"

const header = {
  textAlign: `center`,
}

const subHeader = {
  textAlign: `center`,
}

const nameDisplay = {
  backgroundColor: "red",
  textAlign: "center",
  width: "fit content",
  borderRadius: "15px",
  padding: "8px",
}

const selectButton = {
  margin: `auto`,
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
        <h1 style={header}>Hello, class....</h1>
        <h3 style={subHeader}>Be prepared to be called on at any moment!</h3>
        <h1 style={nameDisplay}>Victim's name goes here!</h1>
        <button
          name="selectStudent"
          onClick={this.handleSelect}
          style={selectButton}
        >
          SELECT A STUDENT
        </button>
        <br />
        <hr />
        <ClassList />
      </Layout>
    )
  }
}
