import React from "react"
import { navigate } from "gatsby"
import Modal from "react-modal"
import * as ROUTES from "../../constants/routes"
import { StyledFirebaseAuth } from "react-firebaseui"
import { getUiConfig } from "../Firebase/firebase"
import { withFirebase } from "../Firebase/context"

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

Modal.setAppElement("body")

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ``,
      password: ``,
      modalIsOpen: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
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

  handleLoginSubmit(e) {
    e.preventDefault()
    console.log(this.state)

    this.setState({
      email: ``,
      password: ``,
    })
    navigate(ROUTES.PROFILE)
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
        <button onClick={this.openModal}>SIGN IN</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example modal"
        >
          <h2>Sign In</h2>
          <form method="post">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
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

            {/* <StyledFirebaseAuth
              uiConfig={getUiConfig(firebase)}
              firebaseAuth={firebase.auth()}
            /> */}
          </form>
        </Modal>
      </div>
    )
  }
}

export default SignInForm
