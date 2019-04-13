import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameOfClass: ``,
      showForm: false,
    }

    this.handleDropdown = this.handleDropdown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClassNameSubmit = this.handleClassNameSubmit.bind(this)
  }

  handleDropdown = e => {
    e.preventDefault()
    console.log("click")
    this.setState({
      showForm: true,
    })
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleClassNameSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <Layout>
        <SEO title="Teacher-profile" />
        <h1>Hello, Instructor.</h1>
        <h2>
          <button name="formDropdown" onClick={this.handleDropdown}>
            Add a Class...
          </button>
        </h2>
        {this.state.showForm ? (
          <form method="post">
            <input
              type="text"
              name="nameOfClass"
              placeholder="Enter Class Name"
              value={this.state.nameOfClass}
              onChange={this.handleChange}
              required
            />
            <input
              type="submit"
              value="SUBMIT"
              onClick={this.handleClassNameSubmit}
            />
          </form>
        ) : null}

        <h2>Pick your class:</h2>
        <p>Class list goes here.</p>
        {/* <Link to="/">Go back to the homepage</Link>
        <Link to="/class/">Go to class page.</Link> */}
      </Layout>
    )
  }
}
