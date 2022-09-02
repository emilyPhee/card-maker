import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './card_editor.module.css';

const CardEditor = ({ authService }) => {
  const location = useLocation();
  console.log('USER ID', location.state.id);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout().then(navigate('/', { replace: true }));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/', { replace: true });
      }
    });
  });
  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker />
        <CardPreview />
      </div>
      <Footer />
    </div>
  );
};

export default CardEditor;
