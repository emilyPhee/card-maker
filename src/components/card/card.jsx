import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={fileURL} alt={fileName} />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>

        <hr />
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>"{message}"</p>
      </div>
    </li>
  );
};

export default Card;
