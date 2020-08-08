import React from "react"
import { Link } from "gatsby"
import styles from "./post.module.css"

const Post = ({ props }) => (
  <article className={styles.article}>
    <Link to={`/post/${props.node.articlesId}`} className={styles.articleLink}>
      <img
        src={`${props.node.image.url}?fit=clip&w=710`}
        alt={props.node.title}
        className={styles.articleImage}
      />
      <p className={styles.articleTitle}>{props.node.title}</p>
      <span className={styles.articleDate}>{props.node.createdAt}</span>
    </Link>
  </article>
)

export default Post
