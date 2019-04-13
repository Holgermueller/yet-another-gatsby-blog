import React, { Component } from "react"
import { navigate } from "gatsby"

import { withFirebase } from "../Firebase"
import * as ROUTES from "../../constants/routes"

const Initial_State = {
  username: "",
  password: "",
  error: null,
}

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...Initial_State }
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(username, password)
      .then(() => {
        this.setState({ ...Initial_State })
        navigate(ROUTES.HOME)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { username, password, error } = this.state

    const isInvalid = password === "" || username === ""

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

export default SignInForm
