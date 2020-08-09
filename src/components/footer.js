import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.css"
import twitterIcon from "../images/twitter.svg"
import noteIcon from "../images/note.svg"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerTitleWrapper}>
        <p className={styles.footerSubTitle}>ONLINE BOOK STORE</p>
        <p className={styles.footerTitle}>GoodBooks</p>
        <span className={styles.footerAnnotation}>
          Amazon.co.jpアソシエイト
        </span>
      </div>
      <div
        style={{
          display: "none",
        }}
        className={styles.footerLinkWrapper}
      >
        <Link to="#" className={styles.footerLink}>
          このサイトについて
        </Link>
      </div>
      <div
        style={{
          display: "none",
        }}
      >
        <Link to="#" className={styles.footerImageLink}>
          <img src={twitterIcon} alt="twitter" className={styles.footerImage} />
        </Link>
        <Link to="#">
          <img src={noteIcon} alt="note" className={styles.footerImage} />
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
