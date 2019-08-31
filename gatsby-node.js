// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   if (page.path.match(/^\/profile/)) {
//     page.matchPath = "/profile/*"

//     createPage(page)
//   }
// }

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     /*
//      * During the build step, `auth0-js` will break because it relies on
//      * browser-specific APIs. Fortunately, we don’t need it during the build.
//      * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
//      * during the build. (See `src/utils/auth.js` to see how we prevent this
//      * from breaking the app.)
//      */
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /auth0-js/,
//             use: loaders.null()
//           }
//         ]
//       }
//     });
//   }
// };

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}