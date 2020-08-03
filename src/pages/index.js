import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import mainVisual from "../images/main-visual.svg"
import styles from "./index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.mainVisual}>
      <div className={styles.mainVisualTextWrapper}>
        <span className={styles.mainVisualSubTitle}>ONLINE BOOK STORE</span>
        <h1 className={styles.mainVisualTitle}>GoodBooks</h1>
        <span className={styles.mainVisualLeadText}>
          働く大人のための読書案内
        </span>
      </div>
      <div className={styles.mainVisualImageWrapper}>
        <img
          src={mainVisual}
          alt="GoodBooks"
          className={styles.mainVisualImage}
        />
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
