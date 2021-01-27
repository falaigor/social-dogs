import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../utils/Button';
import Input from '../../utils/Input';

import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../../components/Helper/Error';

import styles from './LoginForm.module.css';
import stylesBtn from '../../utils/Button/Button.module.css';
import Head from '../../components/Helper/Head';

const LoginForm = () => {
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
    <section className="animeLeft">
      <Head title="Faça seu Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.reset} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
      </div>
      <Link className={stylesBtn.button} to="/login/create">
        Cadastre-se
      </Link>
    </section>
  );
};

export default LoginForm;
