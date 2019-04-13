import React, { Component } from "react"
import { navigate } from "gatsby"

// import { withFirebase } from "../Firebase"
// import * as ROUTES from "../../constants/routes"


export default class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ``,
      password: ``,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    console.log(this.state)

    this.setState({
      username: ``,
      password: ``,
    })
  }

  render() {
    return (
      <form method="post">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <input
          type="submit"
          value="Log In"
          onClick={this.handleLoginSubmit}
          disabled={this.isInvalid}
        />
      </form>
    )
  }
}
