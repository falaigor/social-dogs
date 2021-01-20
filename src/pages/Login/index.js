import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../utils/Button';
import Input from '../../utils/Input';

import styles from './Login.module.css';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const Login = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={styles.section}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      Não tem uma conta? <Link to="/login/create">Cadastre-se</Link>
    </section>
  );
};

export default Login;
