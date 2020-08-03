import { Link } from "gatsby"
import homeIcon from "../images/footer-home.svg"
import recommendIcon from "../images/footer-recommend.svg"
import saleIcon from "../images/footer-sale.svg"
import rankingIcon from "../images/footer-ranking.svg"
import React from "react"
import styles from "./linkBar.module.css"

const LinkBar = () => (
  <div className={styles.linkBar}>
    <ul className={styles.linkBarList}>
      <li className={styles.linkBarListItemHome}>
        <Link to="/" className={styles.linkBarListLink}>
          <img src={homeIcon} alt="ホーム" className={styles.linkBarImage} />
          ホーム
        </Link>
      </li>
      <li className={styles.linkBarListItemRecommend}>
        <Link to="#" className={styles.linkBarListLink}>
          <img
            src={recommendIcon}
            alt="オススメ特集"
            className={styles.linkBarImage}
          />
          オススメ特集
        </Link>
      </li>
      <li className={styles.linkBarListItemSale}>
        <Link to="#" className={styles.linkBarListLink}>
          <img
            src={saleIcon}
            alt="セール情報"
            className={styles.linkBarImage}
          />
          セール情報
        </Link>
      </li>
      <li className={styles.linkBarListItemRanking}>
        <Link to="#" className={styles.linkBarListLink}>
          <img
            src={rankingIcon}
            alt="売れ筋ランキング"
            className={styles.linkBarImage}
          />
          売れ筋ランキング
        </Link>
      </li>
    </ul>
  </div>
)

export default LinkBar
