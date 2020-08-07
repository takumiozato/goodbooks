import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import styles from "./ranking.module.css"

const Ranking = ({ data }) => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>売れ筋ランキング一覧</h1>
        <div className={styles.list}>
          {data.ranking.edges.map(edge => (
            <Post key={`ranking-${edge.node.id}`} props={edge} />
          ))}
        </div>
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
