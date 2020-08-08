import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import styles from "./recommend.module.css"

const Recommend = ({ data }) => {
  return (
    <Layout>
      <SEO title="オススメ特集一覧" />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>オススメ特集一覧</h1>
        <div className={styles.list}>
          {data.recommend.edges.map(edge => (
            <Post key={`recommed-${edge.node.id}`} props={edge} />
          ))}
        </div>
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
