import { Link } from "gatsby"
import homeIcon from "../images/footer-home.svg"
import recommendIcon from "../images/footer-recommend.svg"
import saleIcon from "../images/footer-sale.svg"
import rankingIcon from "../images/footer-ranking.svg"
import PropTypes from "prop-types"
import React from "react"
import "./linkBar.css"

const LinkBar = () => (
  <div className="linkBar">
    <ul className="linkBar-list">
      <li className="linkBar-list-item linkBar-list-item-home">
        <Link to="/" className="linkBar-list-link">
          <img src={homeIcon} alt="ホーム" className="linkBar-image" />
          ホーム
        </Link>
      </li>
      <li className="linkBar-list-item linkBar-list-item-recommend">
        <Link to="#" className="linkBar-list-link">
          <img
            src={recommendIcon}
            alt="オススメ特集"
            className="linkBar-image"
          />
          オススメ特集
        </Link>
      </li>
      <li className="linkBar-list-item linkBar-list-item-sale">
        <Link to="#" className="linkBar-list-link">
          <img src={saleIcon} alt="セール情報" className="linkBar-image" />
          セール情報
        </Link>
      </li>
      <li className="linkBar-list-item linkBar-list-item-ranking">
        <Link to="#" className="linkBar-list-link">
          <img
            src={rankingIcon}
            alt="売れ筋ランキング"
            className="linkBar-image"
          />
          売れ筋ランキング
        </Link>
      </li>
    </ul>
  </div>
)

export default LinkBar
