import React from "react"
import { Link } from "gatsby"

export default () => (
  <div
    style={{
      display: "flex",
      flex: "1",
      justifyContent: "space-between",
      borderBottom: "1px solid #d1c1e0",
    }}
  >
    <nav>
      <Link to="/">Profile</Link>
      <Link to="/">Logout</Link>
    </nav>
  </div>
)
