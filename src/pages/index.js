import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Footer from "../components/footer"
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
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>オススメ特集</h2>
      <div className={styles.articleWrapper}>
        {data.recommend.edges.map(edge => (
          <Post key={`recommed-${edge.node.id}`} props={edge} />
        ))}
      </div>
      <div className={styles.sectionDetailLinkWrapper}>
        <Link to="#" className={styles.sectionDetailLink}>
          オススメ特集をもっと見る
        </Link>
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>セール情報</h2>
      <div className={styles.articleWrapper}>
        {data.sale.edges.map(edge => (
          <Post key={`sale-${edge.node.id}`} props={edge} />
        ))}
      </div>
      <div className={styles.sectionDetailLinkWrapper}>
        <Link to="#" className={styles.sectionDetailLink}>
          セール情報をもっと見る
        </Link>
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>売れ筋ランキング</h2>
      <div className={styles.articleWrapper}>
        {data.ranking.edges.map(edge => (
          <Post key={`ranking-${edge.node.id}`} props={edge} />
        ))}
      </div>
      <div className={styles.sectionDetailLinkWrapper}>
        <Link to="#" className={styles.sectionDetailLink}>
          売れ筋ランキングをもっと見る
        </Link>
      </div>
    </section>
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    recommend: allMicrocmsArticles(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { type: { eq: "recommend" } } }
      limit: 3
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
    sale: allMicrocmsArticles(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { type: { eq: "sale" } } }
      limit: 3
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
    ranking: allMicrocmsArticles(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { type: { eq: "ranking" } } }
      limit: 3
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
