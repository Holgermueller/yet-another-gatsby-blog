import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: ``,
      lastName: ``,
      userName: ``,
      email: ``,
      password: ``,
      confirmPassword: ``,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleRegistrationSubmit = e => {
    e.preventDefault()
    console.log(this.state)

    this.setState({
      firstName: ``,
      lastName: ``,
      userName: ``,
      email: ``,
      password: ``,
      confirmPassword: ``,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Sign-Up" />
        <h1>Register Here!</h1>
        <hr />
        <form method="post">
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="userName"
            placeholder="Enter username"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Register"
            onClick={this.handleRegistrationSubmit}
          />
        </form>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
