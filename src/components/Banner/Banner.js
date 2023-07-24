import React from "react";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBox}>
        <h1 className={styles.bannerTitle}><p className="hero__title_content">
		    <b>HB's</b> WEB
		  </p></h1>
        <h2 className={styles.bannerRewardTotal}>
          Be better than yesterday.
        </h2>
        <Link to="/docs/Note/intro">
          <button className={styles.bannerPortfolio}>Hello World!</button>
        </Link>
        <div className={styles.bannerSocialMedia}>
          <Link to="https://github.com/hbsgithub" style={{ width: "200px" }}>
            <img src="img/github3.png" width={80} />
          </Link>
          {/* <Link
            to="https://www.youtube.com/channel/UCy1Q33r6POsxGTtZcOF--Fw"
            style={{ width: "200px" }}
          >
            <img src="img/youtube.svg" width={80} />
          </Link> */}
          {/* <Link
            to="https://www.instagram.com/weiwei225/"
            style={{ width: "200px" }}
          >
            <img src="img/instagram.svg" width={80} />
          </Link>
          <Link to="https://medium.com/@weiyun0912" style={{ width: "200px" }}>
            <img src="img/mediumpost.png" width={80} />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
