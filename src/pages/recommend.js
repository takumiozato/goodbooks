import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

const Recommend = ({ data }) => {
  return (
    <Layout>
      <h1>オススメ特集一覧</h1>
      <div>
        {data.recommend.edges.map(edge => (
          <Post key={`recommed-${edge.node.id}`} props={edge} />
        ))}
      </div>
    </Layout>
  )
}

export default Recommend

export const query = graphql`
  {
    recommend: allMicrocmsArticles(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { type: { eq: "recommend" } } }
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
