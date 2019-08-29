import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '@material-ui/core/Card'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="HOME" />
        <Card>
        <h3
          style={{
            textAlign: `center`,
            color: `#00BFFF`,
            margin: `auto`,
            padding: `8px`
          }}
        >
          Writer | Traveller | Enthusiast
        </h3>
        </Card>
        
      </Layout>
    )
  }
}
