import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {
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
      <Layout>
        <SEO title="HOME" />
        <h1>Welcome to Call On Me!</h1>
        <h1>Log in here:</h1>
        <hr />
        <form method="post">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Log In"
            onClick={this.handleLoginSubmit}
          />
        </form>
        <h2>Not registered?</h2>
        <Link to="/signup/">Sign up here!</Link>
        <br />
        <Link to="/profile/">See profile page.</Link>
        <Link to="/class/">See class page.</Link>
      </Layout>
    )
  }
}
