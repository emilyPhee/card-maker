import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log());
  };
  return (
    <section className={styles.loginContainer}>
      <Header />
      <section className={styles.btnContainer}>
        <h1>Login</h1>
        <ul>
          <li>
            <Link to="/editor">
              <button className={styles.googleLogin} onClick={onLogin}>
                Google
              </button>
            </Link>
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
