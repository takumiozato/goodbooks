import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

const Sale = ({ data }) => {
  return (
    <Layout>
      <h1>セール情報一覧</h1>
      <div>
        {data.sale.edges.map(edge => (
          <Post key={`sale-${edge.node.id}`} props={edge} />
        ))}
      </div>
    </Layout>
  )
}

export default Sale

export const query = graphql`
  {
    sale: allMicrocmsArticles(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { type: { eq: "sale" } } }
    ) {
      edges {
        node {
          id
          title
          image {
            url
          }
          createdAt(formatString: "YYYY年M月D日")
        }
      }
    }
  }
`
