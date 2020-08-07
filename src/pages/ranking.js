import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

const Ranking = ({ data }) => {
  return (
    <Layout>
      <div>
        {data.ranking.edges.map(edge => (
          <Post key={`ranking-${edge.node.id}`} props={edge} />
        ))}
      </div>
    </Layout>
  )
}

export default Ranking

export const query = graphql`
  {
    ranking: allMicrocmsArticles(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { type: { eq: "ranking" } } }
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
