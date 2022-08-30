import React from 'react';
import { useState } from 'react';
import styles from './card_editor.module.css';

const CardEditor = props => {
  return (
    <>
      <h2>Card Maker</h2>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="company" placeholder="Company" />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="email" placeholder="Email" />
      <label>
        What do we eat?
        {/* <select value={value} onChange={handleChange}>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select> */}
      </label>
    </>
  );
};

export default CardEditor;
