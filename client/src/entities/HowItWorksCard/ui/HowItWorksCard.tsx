import { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorksCard.module.css';
import type { CardListTypes } from '../model/types/cardList';

export const HowItWorksCard = memo((props: CardListTypes) => {
  const { number, firstImage: Icon1, secondImage: Icon2, titleCard, description } = props;

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className={styles.card}
    >
      <span className={styles.number}>{number}</span>
      <Icon1 size={70} strokeWidth={1.5} />
      <div className={styles.titleInner}>
        <p className={styles.cardTitle}>{titleCard}</p>
        <p className={styles.cardSubtitle}>{description}</p>
      </div>
      <Icon2 size={70} strokeWidth={1.5} />
    </motion.div>
  );
});
