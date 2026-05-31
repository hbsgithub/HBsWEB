import React from "react";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBox}>
        <h1 className={styles.bannerTitle}>
          <p className="hero__title_content">
            <b>HB's</b> WEB
          </p>
        </h1>
        <h2 className={styles.bannerRewardTotal}>
          Be better than yesterday.
        </h2>
        <Link to="/docs/Note/intro" className={styles.bannerPortfolioLink}>
          <button className={styles.bannerPortfolio}>Hello World!</button>
        </Link>
        <div className={styles.bannerSocialMedia}>
          <Link to="https://github.com/hbsgithub" className={styles.socialLink}>
            <img src="/img/github3.png" alt="GitHub" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
