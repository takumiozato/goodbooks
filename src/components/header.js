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
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavItem}>
          <Link to="/recommend/" className={styles.headerNavLink}>
            オススメ特集一覧
          </Link>
        </li>
        <li className={styles.headerNavItem}>
          <Link to="/sale/" className={styles.headerNavLink}>
            セール情報一覧
          </Link>
        </li>
        <li className={styles.headerNavItem}>
          <Link to="/ranking/" className={styles.headerNavLink}>
            売れ筋ランキング一覧
          </Link>
        </li>
      </ul>
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
