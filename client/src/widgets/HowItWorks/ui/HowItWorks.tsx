'use client';

import { memo } from 'react';
import { getCards, HowItWorksCard } from '@/entities/HowItWorksCard';
import styles from './HowItWorks.module.css';

export const HowItWorks = memo(() => {
  const cards = getCards();

  return (
    <div className={styles.wrapper}>
      {cards.map((item) => (
        <div key={item.number} className={styles.row}>
          <p className={styles.title}>{item.title}</p>
          <HowItWorksCard {...item} />
        </div>
      ))}
    </div>
  );
});
