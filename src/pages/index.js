import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroContent}>
      <Heading as="h1" className={styles.stunningTitle}>
        {siteConfig.title}
      </Heading>
      <p className={styles.stunningSubtitle}>
        The next-generation eCommerce platform for modern businesses. <br />
        Fast, flexible, and packed with features for your growth.
      </p>
      <div className={styles.stunningButtons}>
        <Link
          className={styles.ctaButton}
          to="/eshopplus_doc/eshop-plus-features"
        >
          🚀 Explore Features
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <div className={styles.fullScreenContainer}>
        <div className={styles.stunningHero}>
          <HomepageHeader />
          <div className={styles.animatedGradient}></div>
        </div>
        <div className={styles.featuresWrapper}>
          <HomepageFeatures />
        </div>
      </div>
    </Layout>
  );
}
