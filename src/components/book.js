import React from "react"
import styles from "./book.module.css"

const Book = ({ props }) => (
  <article className={styles.book}>
    <img
      src={`${props.image.url}?fit=clip&w=73`}
      alt={props.title}
      className={styles.bookImage}
    />
    <div>
      <p className={styles.bookTitle}>{props.title}</p>
      <p className={styles.bookReview}>
        <span>{props.review_point}</span>
        <span>{`${props.review_count}個の評価`}</span>
      </p>
      <p className={styles.bookPrice}>{`¥${props.price}`}</p>
      <div className={styles.bookLinkWrapper}>
        <a
          href={props.amazon_url}
          target="_blank"
          rel="noopener"
          className={styles.bookLink}
        >
          Amazonでチェックする
        </a>
      </div>
    </div>
  </article>
)

export default Book
