import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  let navigate = useNavigate();

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(result => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;

        // when user login, navigate to card editor page
        if (user) {
          navigate('/editor', { replace: true });
        }
      })
      .catch(error => {
        // Handle error here
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;

        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
      });
  };

  return (
    <section className={styles.loginContainer}>
      <Header />
      <section className={styles.btnContainer}>
        <h1>Login</h1>
        <ul>
          <li>
            <button className={styles.googleLogin} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.githubLogin} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
