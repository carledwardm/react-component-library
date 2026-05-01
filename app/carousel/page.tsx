'use client';

import React from 'react';
import styles from '../Buttons/Buttons.module.scss';
import Carousel from '@/components/Carousel';
import CodeBlock from '@/appComponents/CodeBlock/CodeBlock';

const carouselFiles = [
  {
    name: "Component.tsx",
    filePath: "components/Carousel/Carousel.tsx",
  },
  {
    name: "Module.scss",
    filePath: "components/Carousel/Carousel.module.scss",
  },
  {
    name: "Index.tsx",
    filePath: "components/Carousel/index.tsx",
  },
];

export default function CarouselPage() {
  const customImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop',
  ];

  return (
    <main className="main">
      <section className={styles.componentsSection}>
        <h1 className={styles.pageTitle}>Image Carousel Component</h1>
        <hr className={styles.divider} />

        <div className={styles.componentContainer}>
          <h2 className={styles.componentTitle}>Default Carousel (5 Images)</h2>
          <div className={styles.componentDisplay}>
            <Carousel />
          </div>
          <p className={styles.descriptionText}>
            An image carousel component with automatic advancement every 7 seconds. Supports up to 5 images, includes drag/swipe functionality and navigation buttons.
          </p>
          <CodeBlock files={carouselFiles} />
        </div>

        <hr className={styles.divider} />

        <div className={styles.componentContainer}>
          <h2 className={styles.componentTitle}>Custom Images Carousel</h2>
          <div className={styles.componentDisplay}>
            <Carousel images={customImages} autoAdvanceInterval={5000} />
          </div>
          <p className={styles.descriptionText}>
            Same carousel with custom images and a faster auto-advance interval of 5 seconds.
          </p>
        </div>
      </section>
    </main>
  );
}
