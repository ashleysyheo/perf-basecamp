import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import heroImage_avif from '../../assets/images/hero.avif';
import heroImage_png from '../../assets/images/hero.png';
import heroImage_webp from '../../assets/images/hero.webp';
import trendingGif from '../../assets/images/trending.webm';
import findGif from '../../assets/images/find.webm';
import freeGif from '../../assets/images/free.webm';
import alternateTrendingGif from '../../assets/images/trending.mp4';
import alternateFindGif from '../../assets/images/find.mp4';
import alternateFreeGif from '../../assets/images/free.mp4';

import FeatureItem from './components/FeatureItem/FeatureItem';
import CustomCursor from './components/CustomCursor/CustomCursor';
import AnimatedPath from './components/AnimatedPath/AnimatedPath';

import styles from './Home.module.css';

const Home = () => {
  const wrapperRef = useRef<HTMLElement>(null);

  return (
    <>
      <section className={styles.heroSection}>
        <picture>
          <source srcSet={heroImage_avif} type="image/avif" media="all" />
          <source srcSet={heroImage_webp} type="image/webp" media="all" />
          <img className={styles.heroImage} src={heroImage_png} alt="hero" />
        </picture>
        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h3 className={styles.subtitle}>gif search engine for you</h3>
        </div>
        <Link to="/search">
          <button className={classNames(styles.cta, styles.linkButton)}>start search</button>
        </Link>
      </section>
      <section ref={wrapperRef} className={styles.featureSection}>
        <AnimatedPath wrapperRef={wrapperRef} />
        <div className={styles.featureSectionWrapper}>
          <h2 className={styles.featureTitle}>Features</h2>
          <div className={styles.featureItemContainer}>
            <FeatureItem
              title="See trending gif"
              imageSrc={trendingGif}
              alternateImgSrc={alternateTrendingGif}
            />
            <FeatureItem
              title="Find gif for free"
              imageSrc={findGif}
              alternateImgSrc={alternateFindGif}
            />
            <FeatureItem
              title="Free for everyone"
              imageSrc={freeGif}
              alternateImgSrc={alternateFreeGif}
            />
          </div>
          <Link to="/search">
            <button className={styles.linkButton}>start search</button>
          </Link>
        </div>
      </section>
      <CustomCursor text="memegle" />
    </>
  );
};

export default Home;
