import React, { Component } from "react"
import { navigate } from "gatsby"
import Modal from "react-modal"
// import { withFirebase } from "../Firebase"

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

export default class AddClassForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameOfClass: ``,
      modalIsOpen: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClassNameSubmit = this.handleClassNameSubmit.bind(this)
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

  handleClassNameSubmit = e => {
    e.preventDefault()
    this.closeModal()
    console.log(this.state)
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
        <button onClick={this.openModal}>Add a class...</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example modal"
        >
        <h2>Add a class:</h2>
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
        </Modal>
      </div>
    )
  }
}
