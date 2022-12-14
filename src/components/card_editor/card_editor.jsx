import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './card_editor.module.css';

const CardEditor = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Emily',
      company: 'Hallmark',
      title: 'UI Developer',
      email: 'emilypark7@gmail.com',
      message: 'Code your dream',
      theme: 'white',
      fileName: 'default',
      fileURL: '/images/default_logo.png',
    },
    {
      id: '2',
      name: 'Anthony',
      company: 'FieldWire',
      title: 'Software Engineer',
      email: 'kunp@gmail.com',
      message: 'I love coding',
      theme: 'dark',
      fileName: 'default',
      fileURL: '/images/default_logo.png',
    },
  ]);

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
        <CardMaker cards={cards} />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </div>
  );
};

export default CardEditor;
