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
    link: '/docs/intro',
  },
  {
    title: 'Features',
    Svg: require('@site/static/img/features.svg').default,
    description: (
      <>
        Explore the rich features and functionalities available in the eShop Plus platform.
      </>
    ),
    link: 'https://docs.google.com/document/d/1Mxp_E6KGWC7oiQladYhwBH4eLLHfn4m9C0bn2z_2fk4/edit?tab=t.0'
  },
];

function Feature({Svg, title, description, link}) {
  const handleClick = (e) => {
    if (title === 'App Documentation') {
      window.location.href = link;
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <div 
      className={clsx('col col--3', styles.featureCard)} 
      onClick={handleClick}
      style={{ 
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
        padding: '2rem',
        borderRadius: '15px',
        margin: '1rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        width: '300px',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div 
        className={styles.featureIcon} 
        style={{ 
          flex: '0 0 auto', 
          marginBottom: '1rem',
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div 
        className={styles.featureContent}
        style={{ 
          flex: '1 1 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 1
        }}
      >
        <Heading 
          as="h3" 
          style={{ 
            color: 'white', 
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}
        >
          {title}
        </Heading>
        <p style={{ 
          flex: '1 1 auto', 
          display: 'flex', 
          alignItems: 'center',
          fontSize: '1rem',
          lineHeight: '1.6',
          opacity: '0.9'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'stretch',
          gap: '2rem',
          minHeight: '400px',
          padding: '2rem 0'
        }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>  
      </div>
    </section>
  );
}
