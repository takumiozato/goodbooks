import React from "react"
import styles from "./post.module.css"

const Post = ({ props }) => (
  <article className={styles.article}>
    <img
      src={`${props.node.image.url}?fit=clip&w=710`}
      alt={props.node.title}
      className={styles.articleImage}
    />
    <p className={styles.articleTitle}>{props.node.title}</p>
    <span className={styles.articleDate}>{props.node.createdAt}</span>
  </article>
)

export default Post
