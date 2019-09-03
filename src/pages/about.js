import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="ABOUT" />
    <h1>This is the about page</h1>
    <p>
      {data.allMarkdownRemark.edges.node.frontmatter.title}
    </p>
  </Layout>
)

export const aboutPageQuery = graphql`
  query aboutQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default AboutPage
