import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Admin Panel',
    Svg: require('@site/static/img/admin-panel.svg').default,
    description: (
      <>
        Powerful admin dashboard to manage your ecommerce platform with complete control over products, orders, and users.
      </>
    ),
    link: 'https://eshop-pro.eshopweb.store/public/documentation/'
  },
  {
    title: 'App Documentation',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        Comprehensive guide for setting up and customizing your mobile application for both Android and iOS platforms.
      </>
    ),
    link: '/eshopplus_doc/app-setup', // ✅ Updated internal route
  },
  // {
  //   title: 'Features',
  //   Svg: require('@site/static/img/features.svg').default,
  //   description: (
  //     <>
  //       Explore the rich features and functionalities available in the eShop Plus platform.
  //     </>
  //   ),
  //   link: '/eshopplus_doc/eshop-plus-features'
  // },
  {
    title: 'Changelog',
    Svg: require('@site/static/img/changelog.svg').default,
    description: (
      <>
        Stay up to date with the latest features, improvements, and fixes in eShop Plus.
      </>
    ),
    link: '/eshopplus_doc/changelog'
  },
];

function Feature({ Svg, title, description, link }) {
  const handleClick = (e) => {
    if (link.startsWith('/')) {
      window.location.href = link;
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      className={clsx(styles.featureCard, 'feature-card')}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={title}
    >
      <div className={styles.featureIcon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDesc}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresGrid}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
