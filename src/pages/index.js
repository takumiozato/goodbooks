import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
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
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>オススメ特集</h2>
      <div className={styles.articleWrapper}>
        {data.recommend.edges.map(edge => (
          <article className={styles.article}>
            <img
              src={`${edge.node.image.url}?fit=clip&w=710`}
              alt={edge.node.title}
              className={styles.articleImage}
            />
            <p className={styles.articleTitle}>{edge.node.title}</p>
            <span className={styles.articleDate}>{edge.node.createdAt}</span>
          </article>
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
        {data.recommend.edges.map(edge => (
          <article className={styles.article}>
            <img
              src={`${edge.node.image.url}?fit=clip&w=710`}
              alt={edge.node.title}
              className={styles.articleImage}
            />
            <p className={styles.articleTitle}>{edge.node.title}</p>
            <span className={styles.articleDate}>{edge.node.createdAt}</span>
          </article>
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
        {data.recommend.edges.map(edge => (
          <article className={styles.article}>
            <img
              src={`${edge.node.image.url}?fit=clip&w=710`}
              alt={edge.node.title}
              className={styles.articleImage}
            />
            <p className={styles.articleTitle}>{edge.node.title}</p>
            <span className={styles.articleDate}>{edge.node.createdAt}</span>
          </article>
        ))}
      </div>
      <div className={styles.sectionDetailLinkWrapper}>
        <Link to="#" className={styles.sectionDetailLink}>
          売れ筋ランキングをもっと見る
        </Link>
      </div>
    </section>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    recommend: allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
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
