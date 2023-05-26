import styles from "./LoginRedux.module.css";
import { useDispatch } from "react-redux";
import { userAuthActions } from "../store/user-auth-slice";

const LoginRedux = () => {
  const dispatchFunction = useDispatch();

  const logInHandler = (event) => {
    event.preventDefault();

    dispatchFunction(userAuthActions.logIn());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" />
          </div>
          <button>Войти</button>
        </form>
      </section>
    </main>
  );
};

export default LoginRedux;
