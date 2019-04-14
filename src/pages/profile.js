import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AddClassForm from "../components/InstructorComponents/addClassModal"
import {Link} from "gatsby"

export default class ProfilePage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Teacher-profile" />
        <h1>Hello, Instructor.</h1>

        <AddClassForm />
        <br />
        <hr />
        <h2>Pick your class:</h2>

        <p>Class list goes here.</p>
        <Link to="/class/">Go to class page.</Link>
      </Layout>
    )
  }
}
