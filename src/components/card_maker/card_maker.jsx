import React from 'react';
import styles from './card_maker.module.css';

const CardMaker = props => {
  return (
    <section className={styles.maker}>
      <h2 className={styles.title}>Card Maker</h2>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="company" placeholder="Company" />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="email" placeholder="Email" />
      {/* <label>
            What do we eat?
            <select value={value} onChange={handleChange}>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
          </label> */}
    </section>
  );
};

export default CardMaker;
