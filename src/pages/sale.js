import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import styles from "./sale.module.css"

const Sale = ({ data }) => {
  return (
    <Layout>
      <SEO title="セール情報一覧" />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>セール情報一覧</h1>
        <div className={styles.list}>
          {data.sale.edges.map(edge => (
            <Post key={`sale-${edge.node.id}`} props={edge} />
          ))}
        </div>
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
          articlesId
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
