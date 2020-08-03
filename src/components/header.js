import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link to="/" className={styles.headerLink}>
        <span className={styles.headerSubTitle}>ONLINE BOOK STORE</span>
        <h1 className={styles.headerTitle}>{siteTitle}</h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
