import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../utils/Button';
import Input from '../../utils/Input';

import styles from './Login.module.css';
import useForm from '../../Hooks/useForm';

import { TOKEN_POST, USER_GET } from '../../services/api';

const Login = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
    }
  }

  return (
    <section className={styles.section}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      Não tem uma conta? <Link to="/login/create">Cadastre-se</Link>
    </section>
  );
};

export default Login;
