import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="BLOG" />
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <h2>Story Archive</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>Read stories!!</p>
            <Divider variant="middle" />
            <p>Link goes here:</p>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary>
            <h2>Blog Archive</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            Older Blogs if you want to take a deep dive.
            <Divider variant="middle" />
            <p>Link goes here:</p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Layout>
    )
  }
}
