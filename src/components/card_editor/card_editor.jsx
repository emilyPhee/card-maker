import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './card_editor.module.css';

const CardEditor = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout().then(navigate('/', { replace: true }));
  };
  return (
    <>
      <Header onLogout={onLogout} />
      <div className={styles.cardEditorContainer}>
        <div className={styles.editorForm}>
          <h2>Card Maker</h2>
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
        </div>

        <div className={styles.cardView}>
          <h2>Card Preview</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardEditor;
