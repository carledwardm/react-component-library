'use client';

import styles from './Carousel.module.scss';
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
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Image Carousel Component</h1>
          <hr className={styles.divider} />
        </div>
        <div className={styles.componentContainer}>
          <h2 className={styles.componentTitle}>Default Carousel (5 Images)</h2>
          <div className={styles.componentDisplay}>
            <Carousel />
          </div>
          <p className={styles.descriptionText}>
            An image carousel component with automatic advancement every 7 seconds. Supports up to 5 images, 
            includes drag/swipe functionality and navigation buttons. 
          </p>
          <CodeBlock files={carouselFiles} />
        </div>

      </section>
    </main>
  );
}
