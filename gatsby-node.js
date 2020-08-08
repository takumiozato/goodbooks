const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMicrocmsArticles {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allMicrocmsArticles.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.id}`,
      component: path.resolve("./src/pages/post-detail.js"),
      context: {
        id: edge.node.id,
      },
    })
  })
}
