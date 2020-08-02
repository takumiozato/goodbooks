import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1A237E`,
      padding: "6px 12px 10px",
      height: "60px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }}
  >
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <span
        style={{
          fontSize: "10px",
        }}
      >
        ONLINE BOOK STORE
      </span>
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          lineHeight: "1",
        }}
      >
        {siteTitle}
      </h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
