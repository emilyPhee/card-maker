import React from 'react';
import styles from './card_preview.module.css';

const CardPreview = props => {
  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
    </section>
  );
};

export default CardPreview;
