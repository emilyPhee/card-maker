import React from 'react';
import Card from '../card/card';
import styles from './card_preview.module.css';

const CardPreview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
      <div>
        <ul>
          {cards.map(card => {
            return <Card card={card} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default CardPreview;
