import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Focus',
    Svg: require('../../../static/img/rocket.svg').default,
    description: (
      <>
        The content focus on big data, such as Spark, Flink, ClickHouse etc.
      </>
    ),
  },
  {
    title: 'Grace',
    Svg: require('../../../static/img/satellite.svg').default,
    description: (
      <>
        All content has been carefully typeset.
      </>
    ),
  },
  {
    title: 'Original',
    Svg: require('../../../static/img/star.svg').default,
    description: (
      <>
        The content is original or translated from official documents.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}