import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Interactive CTF Challenges',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Solve thrilling, real-world cybersecurity problems with a gamified leaderboard 
        and exclusive rewards for top performers.
      </>
    ),
  },
  {
    title: 'Virtual Cyber Lab',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Access cutting-edge tools and hands-on labs to master ethical hacking, 
         penetration testing, and digital forensics in a safe, simulated environment.
      </>
    ),
  },
  {
    title: 'Expert-Led Masterclasses',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn directly from seasoned professionals and alumni through live workshops, tutorials, 
        and Q&A sessions tailored to current industry trends.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
