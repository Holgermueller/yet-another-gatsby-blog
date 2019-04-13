import React, { Component } from "react"
import { Link, navigate } from "gatsby"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: ``,
      lastName: ``,
      userName: ``,
      email: ``,
      password: ``,
      confirmPassword: ``,
      modalIsOpen: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
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

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = "#f00"
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>REGISTER</button>
        <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example modal"
        >
        <h2>Register</h2>
          <form method="post">
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="userName"
              placeholder="Enter username"
              value={this.state.userName}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
            <input
              type="submit"
              value="Register"
              onClick={this.handleRegistrationSubmit}
            />
          </form>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    )
  }
}
