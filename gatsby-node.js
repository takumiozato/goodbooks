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
              articlesId
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
      path: `/post/${edge.node.articlesId}`,
      component: path.resolve("./src/pages/post-detail.js"),
      context: {
        id: edge.node.articlesId,
      },
    })
  })
}
