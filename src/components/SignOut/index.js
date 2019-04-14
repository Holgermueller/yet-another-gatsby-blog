import React from "react"
import { navigate} from "gatsby"
import * as ROUTES from "../../constants/routes"

class SignOutButton extends React.Component {
  handleClick = e => {
    e.preventDefault()
    console.log("click")
    navigate(ROUTES.LANDING)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{
          float: `right`,
          border: `none`,
          backgroundColor: `inherit`,
          color: `#ffffff`,
          marginRight: `4px`
        }}
      >
        Sign Out
      </button>
    )
  }
}

export default SignOutButton
