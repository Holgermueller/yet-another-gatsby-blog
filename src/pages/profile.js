import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProfilePage = () => (
  <Layout>
    <SEO title="Teacher-profile"></SEO>
    <h1>Hello, Instructor.</h1>
    <h2>Pick your class.</h2>
    <p>Class list goes here.</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/class/">Go to class page.</Link>
  </Layout>
)

  export default ProfilePage
