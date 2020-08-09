import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/book"
import styles from "./post-detail.module.css"

const PostDetail = props => {
  const post = props.data.microcmsArticles
  const categoryLink = `/${post.category.type}/`
  let categoryName
  switch (post.category.type) {
    case "recommend":
      categoryName = "オススメ特集"
      break
    case "sale":
      categoryName = "セール情報"
      break
    case "ranking":
      categoryName = "売れ筋ランキング"
      break
    default:
      break
  }
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description}
        meta={[
          {
            property: `og:image`,
            content: post.image.url,
          },
        ]}
      />
      <section className={styles.wrapper}>
        <ul className={styles.breadcrumb}>
          <li className={styles.breadcrumbItem}>
            <Link to="/" className={styles.breadcrumbLink}>
              ホーム
            </Link>
          </li>
          <li className={styles.breadcrumbItem}>
            <Link to={categoryLink} className={styles.breadcrumbLink}>
              {categoryName}
            </Link>
          </li>
          <li className={styles.breadcrumbItem} data-current="true">
            <p>{post.title}</p>
          </li>
        </ul>
        <img
          src={`${post.image.url}?fit=clip&w=710`}
          alt={post.title}
          className={styles.coverImage}
        />
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>{`${post.createdAt} 更新`}</p>
        {post.description_textarea && (
          <p className={styles.description}>{post.description_textarea}</p>
        )}
        <div className={styles.list}>
          {post.posts.map(post => (
            <Book props={post} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default PostDetail

export const query = graphql`
  query($id: String) {
    microcmsArticles(articlesId: { eq: $id }) {
      id
      description
      description_textarea
      createdAt(formatString: "YYYY年M月D日")
      image {
        url
      }
      category {
        type
      }
      title
      sale_link
      posts {
        amazon_url
        id
        image {
          url
        }
        price
        review_count
        review_point
        title
      }
    }
  }
`
