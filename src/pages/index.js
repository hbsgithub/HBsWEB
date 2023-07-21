import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
		  <p className="hero__title_content">
		    <b>HBs</b>WEB
		  </p>
		</h1>
        <p className="hero__subtitle">
		  Who has seen the wind? Neither I nor you.
		</p>
		<p className="hero__subtitle">
		  But when the leaves hang trembling, The wind is passing through.
		</p>
		<p className="hero__subtitle">
		  Who has seen the wind? Neither you nor I.
		</p>
		<p className="hero__subtitle">
		  But when the trees bow down their heads, The wind is passing by.
		</p>
        <div className={styles.buttons}>
          <Link
            className="button button--info"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="这是HB的主页！">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}